import { useEffect } from "react";
import { Card, Loading } from ".."
import useFetch from "../../hooks/useFetch"
import "./cardList.scss"
import { useSearchParams } from "react-router-dom";
export const CardList = () => {

    const [searchParams] = useSearchParams()

    const { data, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs?${searchParams.toString()}`
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
