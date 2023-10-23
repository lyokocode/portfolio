import { useParams } from "react-router-dom"
import "./singleBlog.scss"
import useFetch from "../../hooks/useFetch"
import { AiOutlineFileImage, AiOutlineUser } from "react-icons/ai"
import { Loading, MarkdownBlog } from "../../components"
export const SingleBlog = () => {

    const { slug } = useParams()
    const { data: blog, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?slug=${slug}`
    );

    return (
        <>
            <section className="singleBlog">
                {loading ? <Loading /> : (error ? "error" : (
                    <>
                        {blog && (
                            <>
                                <div className="infoContainer">
                                    <div className="textContainer">
                                        <h1 className="title">{blog?.title}</h1>
                                        <div className="user">
                                            <div className="userImageContainer">
                                                {
                                                    blog?.User ? (
                                                        <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${blog?.User?.avatar}`} alt="" className="avatar" />
                                                    ) : (
                                                        <AiOutlineUser />
                                                    )
                                                }
                                            </div>
                                            <div className="userTextContainer">
                                                <span className="username">{blog?.author}</span>
                                                <span className="date">{blog?.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="imageContainer">
                                        {
                                            blog?.image ? (<img
                                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog?.image}`}
                                                alt=""
                                                className="image"
                                            />) : (<AiOutlineFileImage />)
                                        }
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="post">
                                        <div className="desc">
                                            <MarkdownBlog blog={blog.blog} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                ))}
            </section>
        </>
    )
}
