import { Link } from "react-router-dom"
import { categories } from "../../data"
import "./categories.scss"
export const Categories = () => {
    return (
        <article className="categoryContainer">
            <h1 className="title">Popular Categories</h1>
            <div className="categories">
                {categories && categories.map(category => (
                    <Link
                        href={category.link}
                        className="category"
                        style={{ background: category.color }}
                        key={category.id}
                    >
                        <img
                            src={category.image}
                            className="image"
                            alt={`${category.title} image`}
                        />
                        <span className="categoryTitle">{category.title}</span>
                    </Link>
                ))}

            </div>
        </article>
    )
}
