import { Suspense, lazy } from "react";
import { Loading, Pagination } from ".."
import useFetch from "../../hooks/useFetch"
import "./cardList.scss"
import { useSearchParams, useNavigate } from "react-router-dom";

const LazyCard = lazy(() => import('../../components').then(module => ({ default: module.Card })));

export const CardList = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Varsayılan sayfa numarası ve sayfa boyutu
    const defaultPage = 1;
    const defaultPageSize = 4;

    // URL'den sayfa numarasını ve sayfa boyutunu alın
    const page = parseInt(searchParams.get('page')) || defaultPage;
    const pageSize = parseInt(searchParams.get('pageSize')) || defaultPageSize;

    let url;
    if (!searchParams.toString().includes('page')) {
        searchParams.set('page', defaultPage);
        searchParams.set('pageSize', defaultPageSize);
        url = `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?fields=title,description,image,slug,createdAt&${searchParams.toString()}`;
    } else {
        url = `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?fields=title,description,image,slug,createdAt&${searchParams.toString()}`;
    }

    const { data, loading, error } = useFetch(url);

    const handlePageChange = (newPage) => {
        searchParams.set('page', newPage);
        searchParams.set('pageSize', pageSize);
        navigate(`?${searchParams.toString()}`);
    };

    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            {loading ? <Loading /> : (error ? "error" : (
                <>
                    {data && data.map(blog => (
                        <Suspense key={blog.slug} fallback={<Loading />} >
                            <LazyCard blog={blog} key={blog?.id} />
                        </Suspense>
                    ))}
                </>
            ))}
            {data.length === 0 && ('Blog not found')}
            <Pagination
                currentPage={page}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
