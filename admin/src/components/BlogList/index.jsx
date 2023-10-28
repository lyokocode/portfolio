import { useState } from "react";
import "./blogList.scss"
import axios from "axios"
import { Error, UpdateBlog } from "..";
import PropTypes from 'prop-types';


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

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
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
                <button className="updateBtn" onClick={() => openModal()}>update</button>
                <button onClick={() => deleteBlog()} className="deleteBtn">delete</button>
            </div>
            {modalVisible && (
                <UpdateBlog
                    blogData={blog}
                    onClose={closeModal}
                    reFetch={reFetch}
                />
            )}
            {error && <Error error={errorMessage} />}

        </div>
    )
}
BlogList.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string
    }),
    reFetch: PropTypes.func
};