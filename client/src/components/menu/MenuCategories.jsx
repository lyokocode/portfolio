import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";

export const MenuCategories = () => {

    const { data: categories, loading } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories/popular`

    );

    if (loading) {
        return "loading"
    } else if (categories) {
        return (
            <div className="categoryList">
                {categories && categories.map(category => (
                    <Link
                        key={category.id}
                        to={category?.link}
                        className="category"
                        style={{ background: category?.color }}
                    >
                        {category?.name}
                    </Link>
                ))}
            </div>
        )
    } else {
        return "there is a problem"
    }
}
