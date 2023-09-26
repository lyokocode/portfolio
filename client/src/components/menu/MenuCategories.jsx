import { Link } from "react-router-dom"
import { categories } from "../../data"

export const MenuCategories = () => {
    const popularCategories = categories.filter(category => category.popular === true);
    console.log(popularCategories)
    return (
        <div className="categoryList">
            {popularCategories && popularCategories.map(category => (
                <Link
                    key={category.id}
                    to={category.link}
                    className="category"
                    style={{ background: category.color }}
                >
                    {category.title}
                </Link>
            ))}
        </div>
    )
}
