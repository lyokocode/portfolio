import { lazy } from "react";
import { Error, Loading } from "@/components"
import useFetch from "@/hooks/useFetch";
import "./menu.scss"

const LazyMenuPost = lazy(() => import('../../components').then(module => ({ default: module.MenuPost })));
const LazyMenuCategories = lazy(() => import('../../components').then(module => ({ default: module.MenuCategories })));

export const Menu = () => {

    const { data: popularBlogs, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/popular?fields=title,createdAt,id,slug`
    );
    const { data: editorPicks, loading: editorLoading, error: editorError } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/editorpick`
    );
    return (
        <aside className="menuContainer">
            {loading ? <Loading /> : (error ? <Error /> : (
                <>   <h2 className="subtitle">{"What's hot"}</h2>
                    <h1 className="title">Most Popular</h1>
                    <LazyMenuPost withImage={false} blogs={popularBlogs} />

                    <h2 className="subtitle">Discover by topic</h2>
                    <h1 className="title">Categories</h1>
                    <LazyMenuCategories />

                    <h2 className="subtitle">Chosen by the editor</h2>
                    <h1 className="title">Editors pick</h1>
                    <LazyMenuPost withImage={true} blogs={editorPicks} /></>
            ))}
        </aside>
    )
}
