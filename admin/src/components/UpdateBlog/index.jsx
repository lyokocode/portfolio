import { useState } from "react"
import "./updateBlog.scss"
import axios from "axios"
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';


export const UpdateBlog = ({ onClose, blogData, reFetch }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null,
        blog: null,
        category: "",
        date: "",
        popular: blogData?.popular || false,
        editorsPick: blogData?.editorsPick || false,
    });


    const handleUpdateBlog = async (e) => {
        e.preventDefault();

        const updatedData = new FormData();

        if (formData.description) {
            updatedData.append("description", formData.description);
        }

        if (formData.title) {
            updatedData.append("title", formData.title);
        }

        if (formData.image) {
            updatedData.append("newImage", formData.image);
        }
        if (formData.blog) {
            updatedData.append("newBlog", formData.blog);
        }
        if (formData.category) {
            updatedData.append("category", formData.category);
        }
        if (formData.date) {
            updatedData.append("date", formData.date);
        }
        if (formData.popular) {
            updatedData.append("popular", formData.popular);
        }
        if (formData.editorsPick) {
            updatedData.append("editorsPick", formData.editorsPick);
        }

        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?id=${blogData?.id}`, updatedData);

            console.log("Blog güncellendi:", response.data);
            reFetch()
            onClose();
            return response.data;
        } catch (error) {
            console.error("Blog güncelleme sırasında hata oluştu:", error);
            throw error;
        }

    };

    return (
        <div className="updateBlog">
            {/* close button */}
            <button
                onClick={onClose}
                className="closeBtn"
            >
                <AiOutlineClose size={25} />
            </button>

            {/* page header */}
            <header className="updateBlogHeader">
                Update Blog
            </header>

            <form className="updateBlogForm" onSubmit={handleUpdateBlog}>
                {/* blog file */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">Blog File:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newBlog"
                            onChange={(e) => setFormData({ ...formData, blog: e.target.files[0] })}
                        />
                        <div className="updateBlogImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blogData?.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* blog name */}
                <div className="formController">
                    <label> blog name:</label>
                    <input
                        className="newBlog"
                        type="text"
                        placeholder={blogData?.title}
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                {/* blog description */}
                <div className="formController">
                    <label> description:</label>
                    <textarea
                        className="newBlog"
                        type="text"
                        placeholder={blogData?.description}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                {/* blog Image */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">Blog image:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newBlog"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                        <div className="updateBlogImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blogData?.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* blog date */}
                <div className="formController">
                    <label >Date:</label>
                    <input
                        type="date"
                        className="newBlog"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />

                </div>
                {/* popular */}
                <div className="formController">
                    <label>Popular:</label>
                    <select
                        value={formData.popular}
                        onChange={(e) => setFormData({ ...formData, popular: e.target.value })}
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>
                {/* editors pick */}
                <div className="formController">
                    <label>Editor's Pick:</label>
                    <select
                        value={formData.editorsPick}
                        onChange={(e) => setFormData({ ...formData, editorsPick: e.target.value })}
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>

                <button className="post-btn" type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}

UpdateBlog.propTypes = {
    onClose: PropTypes.func.isRequired,
    blogData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        popular: PropTypes.bool.isRequired,
        editorsPick: PropTypes.bool.isRequired,
    }),
    reFetch: PropTypes.func.isRequired
};