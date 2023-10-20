import "./categoryList.scss"
export const CategoryList = ({ category }) => {
    const { name, image, link, color, popular } = category;

    console.log(category)
    return (
        <div className={`categoryCard ${popular ? 'popular' : ''}`}>
            <div className="category-image">
                <img
                    style={{ width: "100px" }}
                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${category?.image}`}
                />
            </div>
            <div className="categoryDetails">
                <h2 className="category-title">{name}</h2>
            </div>
            <div className="colorContainer" style={{ background: color }} />

            <div className="buttonContainer">
                <button className="actionButton delete" >
                    Delete
                </button>
                <button className="actionButton update" >
                    Update
                </button>
            </div>
        </div>
    )
}


