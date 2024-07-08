import "./blog.scss";
import useFetch from "@/hooks/useFetch";
import { Header, Loading } from "@/components";
import { lazy, Suspense } from "react";

const LazyBlogList = lazy(() => import('@/components').then(module => ({ default: module.BlogList })));

export const Blogs = () => {
    const { data: blogs, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}blogs?page=1&pageSize=100`
    );
    return (
        <section className="blogPage">
            <Header title="blog" reFetch={reFetch} />
            <>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="blogWrapper">
                        {blogs && blogs.map(blog => (
                            <Suspense fallback={<Loading />} key={blog?.id}>
                                <LazyBlogList blog={blog} reFetch={reFetch} />
                            </Suspense>
                        ))}
                    </div>
                )}
            </>
        </section>
    );
};
