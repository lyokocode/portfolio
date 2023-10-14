import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import "./categories.scss"
export const Categories = () => {

    const { data: categories, loading } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );
    console.log(categories)
    if (loading) {
        return "loading"
    } else if (categories) {
        return (
            <article className="categoryContainer">
                <h1 className="title">Popular Categories</h1>
                <div className="categories">
                    {categories && categories.map(category => (
                        <Link
                            href={category?.link}
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
                    ))}

                </div>
            </article>
        )
    } else {
        return "there is a problem"
    }
}
