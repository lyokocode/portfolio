import { Card } from ".."
import { blogs } from "../../data"
import useFetch from "../../hooks/useFetch"
import "./cardList.scss"
export const CardList = () => {

    const { data, loading, error, reFetch } = useFetch(
        `http://localhost:5000/api/blogs`
    );
    console.log(data)
    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            {blogs ? blogs.map(blog => (
                <Card key={blog.slug} blog={blog} />
            )) : ("loading...")}
        </div>
    )
}
