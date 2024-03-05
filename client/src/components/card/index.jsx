import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import moment from "moment";
import "./card.scss"

export const Card = ({ blog }) => {
    return (
        <>
            {
                blog && (
                    <article className="post">
                        <div className="imageContainer">
                            {
                                blog?.image && (
                                    <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog?.image}?t=2023-10-13T10%3A09%3A55.558Z`} alt="" className="image" />
                                )
                            }
                        </div>
                        <div className="textContainer">
                            <div className="detail">
                                <span className="date">{moment(blog?.createdAt).fromNow()}</span>
                                -
                                <div className="categories">
                                    {blog?.Categories && blog.Categories.map(category => (
                                        <span className="category" key={category.id}>
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Link to={`/blogs/${blog?.slug}`} >
                                <h1 className="postTitle">{blog?.title}</h1>
                            </Link>
                            <p className="postDesc">{blog?.description}</p>
                            <Link className="link" to={`/blogs/${blog?.slug}`}>read more </Link>
                        </div>
                    </article>
                )
            }
        </>
    )
}

Card.propTypes = {
    blog: PropTypes.shape({
        image: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        Categories: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};