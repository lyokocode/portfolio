import { useParams } from "react-router-dom"
import { MarkdownBlog } from "../../components"
import "./singleBlog.scss"
import useFetch from "../../hooks/useFetch"
import { AiOutlineUser } from "react-icons/ai"
export const SingleBlog = () => {

    const { id } = useParams()
    const { data: blog, loading, error } = useFetch(
        `http://localhost:5000/api/blogs/blog?id=${id}`
    );
    if (loading) return "loading"
    if (error) return "there is a problem"

    return (
        <section className="singleBlog">

            <div className="infoContainer">
                <div className="textContainer">
                    <h1 className="title">{blog.title}</h1>
                    <div className="user">
                        <div className="userImageContainer">
                            {
                                blog.User ? (
                                    <img src={`https://bizdptqtvsjekgsblenm.supabase.co/storage/v1/object/public/blog/user/${blog.User.avatar}`} alt="" className="avatar" />
                                ) : (
                                    <AiOutlineUser />
                                )
                            }
                        </div>
                        <div className="userTextContainer">
                            <span className="username">{blog.author}</span>
                            <span className="date">{blog.date}</span>
                        </div>
                    </div>
                </div>

                <div className="imageContainer">
                    <img
                        src={`https://bizdptqtvsjekgsblenm.supabase.co/storage/v1/object/public/blog/images/${blog.image}?t=2023-10-13T10%3A09%3A55.558Z`}
                        alt=""
                        className="image"
                    />
                </div>
            </div>

            <div className="content">
                <div className="post">
                    <div className="desc">
                        <MarkdownBlog blog={blog.blog} />
                    </div>
                </div>
            </div>


        </section>
    )
}
