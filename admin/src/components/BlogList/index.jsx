import { useState } from "react";
import "./blogList.scss"
import axios from "axios"
import { Error } from "..";

export const BlogList = ({ blog, reFetch }) => {
    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)

    const deleteBlog = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?id=${blog?.id}`);
            reFetch()
        } catch (error) {
            serError(true)
            setErrorMessage(error?.response?.data?.message)
        }
    };


    return (
        <div className="blogList">
            <img
                className="blogImage"
                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog.image}`}
                alt=""
            />
            <div className="blogInfo">
                <p>{blog?.title}</p>
            </div>
            <div className="buttonContainer">
                <button className="updateBtn">update</button>
                <button onClick={() => deleteBlog()} className="deleteBtn">delete</button>
            </div>

            {error && <Error error={errorMessage} />}
        </div>
    )
}
