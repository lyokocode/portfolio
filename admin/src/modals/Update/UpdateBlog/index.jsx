import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md"
import useFetch from "@/hooks/useFetch"
import "./updateBlog.scss"
import useUpdate from "@/hooks/useUpdate";
import useFormHandler from '@/middleware/formHandlers';

export const UpdateBlog = ({ onClose, blogData, reFetch }) => {
    const { updateData } = useUpdate();
    const { data } = useFetch(`categories?fields=id,name`);

    const { formData, handleChange, handleSubmit } = useFormHandler(
        updateData,
        `blogs/blog?id=${blogData?.id}`,
        reFetch,
        onClose
    );

    return (
        <div className="updateBlog">
            <div className="updateContainer">

                {/* page header */}
                <header className="top">
                    <h1>Update Blog</h1>

                    {/* close button */}
                    <button
                        onClick={onClose}
                        className="closeBtn"
                    >
                        <AiOutlineClose size={25} />
                    </button>
                </header>

                <div className="bottom">
                    {/* blog image */}
                    <div className="left">
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blogData?.image}`}
                            alt=""
                        />
                    </div>

                    {/* form container */}
                    <div className="right">
                        <form onSubmit={handleSubmit}>

                            {/* blog file */}
                            <div className="formInput">
                                <label htmlFor="blogFile" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>
                                    Blog File
                                </div>
                                <input
                                    type='file'
                                    id='blogFile'
                                    name="newBlog"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* blog name */}
                            <div className="formInput">
                                <label> blog name:</label>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder={blogData?.title}
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* blog description */}
                            <div className="formInput">
                                <label> description:</label>
                                <textarea
                                    name="description"
                                    type="text"
                                    placeholder={blogData?.description}
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* blog Image */}
                            <div className="formInput">
                                <label htmlFor="imageFile" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>
                                    Blog Image
                                </div>
                                <input
                                    type='file'
                                    id='imageFile'
                                    name="newImage"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* blog date */}
                            <div className="formInput">
                                <label >Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    defaultValue={blogData.date}
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* popular */}
                            <div className="formInput">
                                <label>Popular:</label>
                                <select
                                    value={formData.popular}
                                    name="popular"
                                    onChange={handleChange}
                                >
                                    <option value=""></option>
                                    <option value="false">false</option>
                                    <option value="true">true</option>
                                </select>
                            </div>

                            {/* editors pick */}
                            <div className="formInput">
                                <label>{"Editor's Pick:"}</label>
                                <select
                                    value={formData.editorsPick}
                                    name="editorsPick"
                                    onChange={handleChange}
                                >
                                    <option value=""></option>
                                    <option value="false">false</option>
                                    <option value="true">true</option>
                                </select>
                            </div>

                            {/* categories */}
                            <div className="formInput">
                                <label>Categories:</label>
                                <select
                                    value={formData.CategoryId}
                                    onChange={handleChange}
                                    name="CategoryId"
                                    multiple
                                >
                                    <option value=""></option>
                                    {data && data.map((cat) => (
                                        <option key={cat.id} value={cat.id} >
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* send button */}
                            <div className="formInput">
                                <button className="sendBtn" type="submit">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
        popular: PropTypes.bool.isRequired,
        editorsPick: PropTypes.bool.isRequired,
    }),
    reFetch: PropTypes.func.isRequired
};