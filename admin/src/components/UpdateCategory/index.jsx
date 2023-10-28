import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Error } from "..";
import { AiOutlineClose } from "react-icons/ai";
import "./updateCategory.scss";

export const UpdateCategory = ({ onClose, categoryData, reFetch }) => {

    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)

    const [formData, setFormData] = useState({
        name: "",
        image: null,
        color: "",
        popular: categoryData?.popular
    });

    const handleUpdateCategory = async (e) => {
        e.preventDefault();

        const updatedData = new FormData();

        if (formData.name) {
            updatedData.append("name", formData.name);
        }

        if (formData.color) {
            updatedData.append("color", formData.color);
        }

        if (formData.image) {
            updatedData.append("newImage", formData.image);
        }

        if (formData.popular) {
            updatedData.append("popular", formData.popular);
        }

        try {
            await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?id=${categoryData?.id}`, updatedData);

            reFetch()
            onClose();

        } catch (error) {
            serError(true)
            setErrorMessage(error?.response?.data?.message || "there is a problem on server")
        }

    }

    return (
        <div className="updateCategory">
            {/* close button */}
            <button
                onClick={onClose}
                className="closeBtn"
            >
                <AiOutlineClose size={25} />
            </button>
            <header className="updateCategoryHeader">
                Update Category
            </header>
            <form
                onSubmit={handleUpdateCategory}
                className="updateCategoryForm"
            >
                {/* category name */}
                <div className="formController">
                    <label> category name:</label>
                    <input
                        className="newCategory"
                        type="text"
                        placeholder={categoryData?.name}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}

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

                {/* category color */}
                <div className="formController">
                    <label> category color:</label>
                    <input
                        className="newCategory"
                        type="text"
                        placeholder={categoryData?.color}
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}

                    />
                </div>


                {/* category Image */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">Category image:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newCategory"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                        <div className="updateCategoryImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${categoryData?.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <button className="post-btn" type="submit">
                    Update
                </button>

            </form>
            {error && <Error error={errorMessage} />}

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