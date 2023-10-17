import "./blog.scss"
import useFetch from "../../hooks/useFetch"
import { AiOutlineReload } from "react-icons/ai"
import { BlogList } from "../../components";
export const Blogs = () => {

    const { data: blogs, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`
    );
    if (loading) return "loading"
    if (error) return "there is a problem"


    return (
        <section className="blogPage">
            <header className="blogHeader">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="search to blog"
                />
                <button className="createBtn">
                    Create a new Blog
                </button>
                <button
                    className="reloadBtn"
                    onClick={reFetch}>
                    <AiOutlineReload className="reloadIcon" />
                </button>
            </header>

            <div className="blogWrapper">
                {blogs && blogs.map(blog => (
                    <BlogList key={blog?.id} blog={blog} />
                ))}
            </div>

        </section>
    )
}
