import { Link } from "react-router-dom"
import "./card.scss"

export const Card = ({ blog }) => {

    console.log(blog)
    return (
        <article className="post">
            <div className="imageContainer">
                <img src={blog.image} alt="" className="image" />
            </div>
            <div className="textContainer">
                <div className="detail">
                    <span className="date">{blog.date}</span>
                    -
                    <span className="category">{blog.category}</span>
                </div>
                <Link to={`/blogs/${blog.slug}`} >
                    <h1 className="postTitle">{blog.title}</h1>
                </Link>
                <p className="postDesc">{blog.description}</p>
                <Link to={`/blogs/${blog.slug}`} >read more</Link>
            </div>
        </article>
    )
}
