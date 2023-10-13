import { Link } from "react-router-dom"

export const MenuPost = ({ withImage, popularBlogs }) => {
    return (
        <article className="items">
            {
                popularBlogs ? (
                    popularBlogs.map(popular => (
                        <Link to="/" className="item" key={popular.id}>
                            {withImage && <div className="imageContainer">
                                <img
                                    className="image"
                                    src="/nextjs.png"
                                    alt="react blog image"
                                />
                            </div>}
                            <div className="textContainer">
                                <span className={`$"category" $"next"`}>{popular.category}</span>
                                <h3 className="postTitle">{popular.title}</h3>
                                <div className="detail">

                                    <span className="username">{popular?.User?.userName}</span>
                                    -
                                    <span className="date">{popular?.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : ("popular blogs not found")
            }
        </article>
    )
}
