import "./blogList.scss"
import axios from "axios"

export const BlogList = ({ blog, reFetch }) => {

    const deleteBlog = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/blogs/blog?id=${blog.id}`);
            reFetch()
        } catch (error) {
            // Hata durumunu işle
            console.error("Blog silinirken hata oluştu:", error);
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
        </div>
    )
}
