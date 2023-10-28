import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const MenuPost = ({ withImage, blogs }) => {
    console.log(blogs)
    return (
        <article className="items">
            {blogs && (
                blogs.map((blog) => (
                    <Link to={`/blogs/${blog.slug}`} key={blog.slug} className="item">
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
                            <span
                                className="category"
                                style={{ backgroundColor: blog?.Category?.color }}
                            >{blog.Category.name}</span>
                            <h3 className="postTitle">{blog.title}</h3>
                            <div className="detail">
                                <span className="username">{blog.User.userName}</span> -
                                <span className="date">{blog.date}</span>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </article>
    );
};
MenuPost.propTypes = {
    withImage: PropTypes.bool.isRequired,
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            Category: PropTypes.shape({
                name: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired
            }),
            title: PropTypes.string.isRequired,
            User: PropTypes.shape({
                userName: PropTypes.string.isRequired
            }),
            date: PropTypes.string.isRequired
        })
    ).isRequired
};