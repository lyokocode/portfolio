import useFetch from "../../hooks/useFetch";
import "./categories.scss"
import { CategoryCard, Loading } from "..";
export const Categories = () => {

    const { data: categories, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories?fields=color,name,image,id`
    );

    return (
        <article className="categoryContainer">
            {loading ? <Loading /> : (error ? "error" : (
                <>
                    <h1 className="title">Popular Categories</h1>
                    <div className="categories">
                        {categories && categories.map(category => (
                            <CategoryCard category={category} key={category.id} />
                        ))}

                    </div>
                </>
            ))}
        </article>
    )
}
