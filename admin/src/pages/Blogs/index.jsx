import "./blog.scss"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import { AiOutlineReload } from "react-icons/ai"
import { BlogList } from "../../components";
export const Blogs = () => {
    const { data: blogs, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`
    );



    return (
        <section className="blogPage">
            <header className="blogHeader">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="search to blog"
                />
                <Link to="/blogs/create" className="createBtn">
                    Create a new Blog
                </Link>
                <button
                    className="reloadBtn"
                    onClick={reFetch}>
                    <AiOutlineReload className="reloadIcon" />
                </button>
            </header>
            <>
                {
                    loading ? ("loading") : (error ? "error" : (
                        <div className="blogWrapper">
                            {blogs && blogs.map(blog => (
                                <BlogList key={blog?.id} blog={blog} reFetch={reFetch} />
                            ))}
                        </div>
                    ))
                }
            </>
            <div>

            </div>
        </section>
    )
}
