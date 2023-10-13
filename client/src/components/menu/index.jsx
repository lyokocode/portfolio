import { MenuPost, MenuCategories } from ".."
import useFetch from "../../hooks/useFetch";
import "./menu.scss"

export const Menu = () => {

    const { data: popularBlogs, loading, error } = useFetch(
        `http://localhost:5000/api/blogs/popular`
    );
    const { data: editorPicks } = useFetch(
        `http://localhost:5000/api/blogs/popular`
    );
    if (loading) return "loading"
    return (
        <aside className="menuContainer">
            <h2 className="subtitle">{"What's hot"}</h2>
            <h1 className="title">Most Popular</h1>
            <MenuPost withImage={false} popularBlogs={popularBlogs} />

            <h2 className="subtitle">Discover by topic</h2>
            <h1 className="title">Categories</h1>

            <MenuCategories />

            <h2 className="subtitle">Chosen by the editor</h2>
            <h1 className="title">Editors pick</h1>
            <MenuPost withImage={true} />
        </aside>
    )
}
