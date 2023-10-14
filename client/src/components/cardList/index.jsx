import { Card } from ".."
import useFetch from "../../hooks/useFetch"
import "./cardList.scss"
export const CardList = () => {

    const { data, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`
    );
    if (loading) return "loading"
    if (error) return "there is a problem"
    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            {data ? data.map(blog => (
                <Card key={blog.slug} blog={blog} />
            )) : ("loading...")}
        </div>
    )
}
