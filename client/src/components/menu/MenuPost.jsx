import { Link } from "react-router-dom";

export const MenuPost = ({ withImage, blogs }) => {
    return (
        <article className="items">
            {blogs ? (
                blogs.map((blog) => (
                    <Link to={`/blogs/${blog.slug}`} key={blog.id} className="item">
                        {withImage && (
                            <div className="imageContainer">
                                <img
                                    className="image"
                                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog.image}`}
                                    alt="Blog Image"
                                />
                            </div>
                        )}
                        <div className="textContainer">
                            <span className={`category ${blog.category}`}>{blog.category}</span>
                            <h3 className="postTitle">{blog.title}</h3>
                            <div className="detail">
                                <span className="username">{blog.User.username}</span> -
                                <span className="date">{blog.date}</span>
                            </div>
                        </div>
                    </Link>
                ))
            ) : ("blog is not found")}
        </article>
    );
};
