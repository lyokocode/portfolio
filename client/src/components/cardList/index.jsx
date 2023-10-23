import { Card, Loading } from ".."
import useFetch from "../../hooks/useFetch"
import "./cardList.scss"
export const CardList = () => {

    const { data, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs`
    );

    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            {loading ? <Loading /> : (error ? "error" : (
                <>
                    {data && data.map(blog => (
                        <Card key={blog.slug} blog={blog} />
                    ))}
                </>
            ))}
        </div>
    )
}
