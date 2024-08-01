import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md"
import "./updateCategory.scss";
import useUpdate from "@/hooks/useUpdate";
import useFormHandler from '@/middleware/formHandlers';

export const UpdateCategory = ({ onClose, categoryData, reFetch }) => {

    const { updateData } = useUpdate();

    const { formData, handleChange, handleSubmit } = useFormHandler(
        updateData,
        `categories/category?id=${categoryData?.id}`,
        reFetch,
        onClose
    );

    return (
        <div className="updateCategory">
            <div className="updateContainer">
                {/* close button */}
                <header className="top">
                    <h1>Update Category</h1>
                    <button
                        onClick={onClose}
                        className="closeBtn"
                    >
                        <AiOutlineClose size={25} />
                    </button>
                </header>

                <div className="bottom">
                    <div className="left">
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${categoryData?.image}`}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form
                            onSubmit={handleSubmit}
                            className="updateCategoryForm"
                        >
                            {/* category name */}
                            <div className="formInput">
                                <label> category name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={categoryData?.name}
                                    value={formData.name}
                                    onChange={handleChange}

                                />
                            </div>

                            {/* popular */}
                            <div className="formInput">
                                <label>Popular:</label>
                                <select
                                    name="popular"
                                    value={formData.popular}
                                    onChange={handleChange}
                                >
                                    <option value="">select</option>
                                    <option value="false">false</option>
                                    <option value="true">true</option>
                                </select>
                            </div>

                            {/* category color */}
                            <div className="formInput">
                                <label> category color:</label>
                                <input
                                    type="text"
                                    name="color"
                                    placeholder={categoryData?.color}
                                    value={formData.color}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* category Image */}
                            <div className="formInput">
                                <label htmlFor="file" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>
                                    Category Image
                                </div>
                                <input
                                    type='file'
                                    id='file'
                                    name="newImage"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                />
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


UpdateCategory.propTypes = {
    onClose: PropTypes.func.isRequired,
    categoryData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        popular: PropTypes.bool.isRequired,
    }),
    reFetch: PropTypes.func.isRequired
};