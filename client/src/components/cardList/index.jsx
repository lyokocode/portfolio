import { Suspense, lazy, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { Error, Loading, Pagination, SearchBar } from "@/components";
import useFetch from "@/hooks/useFetch";
import { usePagination, generateUrl } from "@/utils";
import "./cardList.scss";

const LazyCard = lazy(() =>
    import("@/components").then((module) => ({ default: module.Card }))
);

export const CardList = () => {
    const [searchParams] = useSearchParams();
    const { page, pageSize, totalPages, handlePageChange } = usePagination(
        4,
        "blogs/count"
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

    const baseUrl = `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`;
    const url = generateUrl(baseUrl, searchParams, page, pageSize, debouncedSearchQuery);

    const { data, loading, error } = useFetch(url);
    return (
        <div className="cardList">
            <div className="header">
                <h1 className="cardTitle">Recent Post</h1>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error />
            ) : (
                <>
                    {data &&
                        data.map((blog) => (
                            <Suspense key={blog.slug} fallback={<Loading />}>
                                <LazyCard blog={blog} key={blog?.id} />
                            </Suspense>
                        ))}
                </>
            )}
            {data.length === 0 && "Blog not found"}
            <Pagination
                currentPage={page}
                onPageChange={handlePageChange}
                totalPages={totalPages}
            />
        </div>
    );
};
