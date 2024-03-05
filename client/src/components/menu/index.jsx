import { MenuPost, MenuCategories, Loading } from ".."
import useFetch from "../../hooks/useFetch";
import "./menu.scss"

export const Menu = () => {

    const { data: popularBlogs, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/popular?fields=title,createdAt,id,slug`
    );
    const { data: editorPicks } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/editorpick`
    );

    return (
        <aside className="menuContainer">
            {loading ? <Loading /> : (error ? "error" : (
                <>   <h2 className="subtitle">{"What's hot"}</h2>
                    <h1 className="title">Most Popular</h1>
                    <MenuPost withImage={false} blogs={popularBlogs} />

                    <h2 className="subtitle">Discover by topic</h2>
                    <h1 className="title">Categories</h1>
                    <MenuCategories />

                    <h2 className="subtitle">Chosen by the editor</h2>
                    <h1 className="title">Editors pick</h1>
                    <MenuPost withImage={true} blogs={editorPicks} /></>
            ))}
        </aside>
    )
}
