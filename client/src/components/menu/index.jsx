import { MenuPost, MenuCategories } from ".."
import "./menu.scss"

export const Menu = () => {
    return (
        <aside className="menuContainer">
            <h2 className="subtitle">{"What's hot"}</h2>
            <h1 className="title">Most Popular</h1>
            <MenuPost withImage={false} />

            <h2 className="subtitle">Discover by topic</h2>
            <h1 className="title">Categories</h1>

            <MenuCategories />

            <h2 className="subtitle">Chosen by the editor</h2>
            <h1 className="title">Editors pick</h1>
            <MenuPost withImage={true} />
        </aside>
    )
}
