import "./categories.scss"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import { AiOutlineReload } from "react-icons/ai"
import { CategoryList } from "../../components"

export const Categories = () => {

    const { data: categories, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );


    return (
        <section className="categoriesPage">
            <header className="categoriesHeader">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="search to category"
                />
                <Link to="/categories" className="createBtn">
                    Create a new Blog
                </Link>
                <button
                    className="reloadBtn"
                    onClick={reFetch}>
                    <AiOutlineReload className="reloadIcon" />
                </button>
            </header>
            <>
                {
                    loading ? ("loading") : (error ? "error" : (
                        <div className="categoryWrapper">
                            {categories && categories.map(category => (
                                <CategoryList key={category.id} category={category} />
                            ))}
                        </div>
                    ))
                }
            </>
        </section>
    )
}
