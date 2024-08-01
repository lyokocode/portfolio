import { useState } from "react";
import "./blogList.scss"
import { Action, Error, UpdateBlog } from "@/components";
import PropTypes from 'prop-types';


export const BlogList = ({ blog, reFetch }) => {

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
            <Action
                reFetch={reFetch}
                setModalVisible={setModalVisible}
                endpoint={`blogs/blog?id=${blog?.id}`}
                title="blog"
            />
            {modalVisible && (
                <UpdateBlog
                    blogData={blog}
                    onClose={closeModal}
                    reFetch={reFetch}
                />
            )}

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
