import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import { Loading } from "..";

export const MenuCategories = () => {

    const { data: categories, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories/popular?fields=id,name,image,color`

    );

    return (
        <div className="categoryList">
            {loading ? <Loading /> : (error ? "error" : (
                <>
                    {categories && categories.map(category => (
                        <Link
                            key={category.id}
                            to={`blogs?categoryIds=${category.id}`}
                            className="category"
                            style={{ background: category?.color }}
                        >
                            {category?.name}
                        </Link>
                    ))}
                </>
            ))}
        </div>
    )
}
