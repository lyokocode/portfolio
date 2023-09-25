import { CardList } from "../../components"
import "./blog.scss"
export const Blogs = () => {
    return (
        <section className="blogPage">
            <h1 className="title">Blog</h1>
            <div className="content">
                <CardList />
            </div>
        </section>
    )
}
