import { Card } from ".."
import { blogs } from "../../data"
import useFetch from "../../hooks/useFetch"
import "./cardList.scss"
export const CardList = () => {

    const { data, loading, error, reFetch } = useFetch(
        `http://localhost:5000/api/blogs`
    );
    if (loading) return "loading"
    if (error) return "there is a problem"
    console.log(data)
    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            {data ? data.map(blog => (
                <Card key={blog.slug} blog={blog} />
            )) : ("loading...")}
        </div>
    )
}
