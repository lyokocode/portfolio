import "./categories.scss"
import useFetch from "../../hooks/useFetch"
import { CategoryList, Header } from "../../components"

export const Categories = () => {

    const { data: categories, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );


    return (
        <section className="categoriesPage">
            <Header title="category" reFetch={reFetch} />
            <>
                {
                    loading ? ("loading") : (error ? "error" : (
                        <div className="categoryWrapper">
                            {categories && categories.map(category => (
                                <CategoryList key={category.id} category={category} reFetch={reFetch} />
                            ))}
                        </div>
                    ))
                }
            </>
        </section>
    )
}
