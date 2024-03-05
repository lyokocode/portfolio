import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import moment from "moment"
export const MenuPost = ({ withImage, blogs }) => {
    return (
        <article className="items">
            {blogs && (
                blogs.map((blog) => (
                    <Link to={`/blogs/${blog.slug}`} key={blog.slug} className="item">
                        {withImage && (
                            <div className="imageContainer">
                                <img
                                    className="image"
                                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog?.image}`}
                                    alt="Blog Image"
                                />
                            </div>
                        )}
                        <div className="textContainer">
                            <div className="categories">
                                {
                                    blog?.Categories && blog?.Categories.map(category => (
                                        <span
                                            key={category.id}
                                            className="category"
                                            style={{ backgroundColor: category?.color }}
                                        >
                                            {category.name}
                                        </span>
                                    ))
                                }
                            </div>
                            <h3 className="postTitle">{blog?.title}</h3>
                            <div className="detail">
                                <span className="username">{blog?.User?.userName}</span> -
                                <span className="date">{moment(blog?.createdAt).fromNow()}</span>
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
            image: PropTypes.string,
            Category: PropTypes.shape({
                name: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired
            }),
            title: PropTypes.string.isRequired,
            User: PropTypes.shape({
                userName: PropTypes.string.isRequired
            }),
            createdAt: PropTypes.string.isRequired
        })
    ).isRequired
};