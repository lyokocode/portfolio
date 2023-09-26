import { Link } from "react-router-dom"

export const MenuPost = ({ withImage }) => {
    return (
        <article className="items">
            <Link to="/" className="item">
                {withImage && <div className="imageContainer">
                    <img
                        className="image"
                        src="/reactjs.png"
                        alt="react blog image"
                    />
                </div>}
                <div className="textContainer">
                    <span className={`"category" "react"`}>React</span>
                    <h3 className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil?</h3>
                    <div className="detail">
                        <span className="username">John Doe</span>
                        -
                        <span className="date">10.09.2023</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className="item">
                {withImage && <div className="imageContainer">
                    <img
                        className="image"
                        src="/nextjs.png"
                        alt="react blog image"
                    // fill
                    />
                </div>}
                <div className="textContainer">
                    <span className={`$"category" $"next"`}>React</span>
                    <h3 className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil?</h3>
                    <div className="detail">
                        <span className="username">Jane Doe</span>
                        -
                        <span className="date">11.09.2023</span>
                    </div>
                </div>
            </Link>
        </article>
    )
}
