import "./categories.scss"
import useFetch from "@/hooks/useFetch"
import { CategoryList, Header, Loading } from "@/components"

export const Categories = () => {

    const { data: categories, loading, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}categories`
    );


    return (
        <section className="categoriesPage">
            <Header title="category" reFetch={reFetch} />
            <>
                {
                    loading ? <Loading /> : (
                        <div className="categoryWrapper">
                            {categories && categories.map(category => (
                                <CategoryList key={category.id} category={category} reFetch={reFetch} />
                            ))}
                        </div>
                    )
                }
            </>
        </section>
    )
}
