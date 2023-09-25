import { Link } from "react-router-dom"
import "./card.scss"
export const Card = () => {
    return (
        <article className="post">
            <div className="imageContainer">
                <img src="/privateRoute.png" alt="" />
            </div>
            <div className="textContainer">
                <div className="detail">
                    <span className="date">11.09.2023</span>
                    -
                    <span className="category">react</span>
                </div>
                <Link>
                    <h1 className="postTitle">Private Route nedir? nasıl oluşturulur</h1>
                </Link>
                <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam adipisci vel eius architecto assumenda quo a fugit voluptate rem.</p>
                <Link to="/blogs">read more</Link>
            </div>
        </article>
    )
}
