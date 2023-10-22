import "./blog.scss"
import useFetch from "../../hooks/useFetch"
import { BlogList, Error, Header, Loading } from "../../components";
export const Blogs = () => {

    const { data: blogs, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`
    );

    return (
        <section className="blogPage">
            <Header title="blog" reFetch={reFetch} />
            <>
                {
                    loading ? <Loading /> : (error ? <Error error={error.message} /> : (
                        <div className="blogWrapper">
                            {blogs && blogs.map(blog => (
                                <BlogList key={blog?.id} blog={blog} reFetch={reFetch} />
                            ))}
                        </div>
                    ))
                }
            </>
        </section>
    )
}
