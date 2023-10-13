import { Link } from "react-router-dom"
import "./card.scss"

export const Card = ({ blog }) => {
    return (
        <article className="post">
            <div className="imageContainer">
                <img src={`https://bizdptqtvsjekgsblenm.supabase.co/storage/v1/object/public/blog/images/${blog.image}?t=2023-10-13T10%3A09%3A55.558Z`} alt="" className="image" />
            </div>
            <div className="textContainer">
                <div className="detail">
                    <span className="date">{blog.date}</span>
                    -
                    <span className="category">{blog.category}</span>
                </div>
                <Link to={`/blogs/${blog.id}`} >
                    <h1 className="postTitle">{blog.title}</h1>
                </Link>
                <p className="postDesc">{blog.description}</p>
                <Link to={`/blogs/${blog.id}`} >read more</Link>
            </div>
        </article>
    )
}
