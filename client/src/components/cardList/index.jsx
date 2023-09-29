import { Card } from ".."
import { blogs } from "../../data"
import "./cardList.scss"
export const CardList = () => {
    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            {blogs ? blogs.map(blog => (
                <Card key={blog.slug} blog={blog} />
            )) : ("loading...")}
        </div>
    )
}
