import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const CategoryCard = ({ category }) => {
    return (
        <Link
            to={`blogs?categoryIds=${category.id}`}
            className="category"
            style={{ background: category?.color }}
            key={category.id}
        >
            <img
                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${category.image}`}
                className="image"
                alt={`${category?.name} image`}
            />
            <span className="categoryTitle">{category?.name}</span>
        </Link>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};