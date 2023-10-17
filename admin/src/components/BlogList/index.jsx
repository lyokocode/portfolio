import "./blogList.scss"
import { BsArrowRightShort } from "react-icons/bs"

export const BlogList = ({ blog }) => {
    console.log(blog)
    return (
        <div className="blogList">
            <img
                className="blogImage"
                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog.image}`}
                alt=""
            />
            <div className="blogInfo">
                <p>{blog?.title}</p>
                <button>
                    <BsArrowRightShort size={20} />
                </button>
            </div>
        </div>
    )
}
