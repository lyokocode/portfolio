import { Suspense, lazy, useState } from "react";
import { Loading, Pagination } from "@/components"
import useFetch from "@/hooks/useFetch"
import "./cardList.scss"
import { useSearchParams } from "react-router-dom";
import { usePagination } from "@/utils/usePagination";
import { useDebounce } from "use-debounce";

const LazyCard = lazy(() => import('@/components').then(module => ({ default: module.Card })));

export const CardList = () => {
    const { data: count } = useFetch(`${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/count`);
    const [searchParams] = useSearchParams();

    const { page, pageSize, totalPages, handlePageChange } = usePagination(2, count)

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

    let url;
    if (!searchParams.toString().includes('page')) {
        searchParams.set('page', page);
        searchParams.set('pageSize', pageSize);
        url = `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?fields=title,description,image,slug,createdAt&${searchParams.toString()}`;
    } else {
        url = `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?fields=title,description,image,slug,createdAt&${searchParams.toString()}`;
    }
    if (debouncedSearchQuery.length) { // debouncedSearchQuery'yi kullan
        url += `&searchQuery=${debouncedSearchQuery}`;
    }
    const { data, loading, error } = useFetch(url);
    console.log(debouncedSearchQuery)

    return (
        <div className="cardList">
            <div className="header">
                <h1 className="cardTitle">Recent Post</h1>
                <input
                    type="text"
                    placeholder="search..."
                    className="blogInput"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />

            </div>
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
                totalPages={totalPages}
            />
        </div>
    );
};
