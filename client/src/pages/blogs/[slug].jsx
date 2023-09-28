import { useParams } from "react-router-dom"
import { MarkdownBlog } from "../../components"
import "./singleBlog.scss"
import { blogs } from "../../data"
export const SingleBlog = () => {

    const { slug } = useParams()

    const blog = blogs.find((blogItem) => blogItem.slug === slug);

    return (
        <section className="singleBlog">

            <div className="infoContainer">
                <div className="textContainer">
                    <h1 className="title">{blog.title}</h1>
                    <div className="user">
                        <div className="userImageContainer">
                            <img src={blog.authorImage} alt="" className="avatar" />
                        </div>
                        <div className="userTextContainer">
                            <span className="username">{blog.author}</span>
                            <span className="date">{blog.date}</span>
                        </div>
                    </div>
                </div>

                <div className="imageContainer">
                    <img
                        src={blog.image}
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
