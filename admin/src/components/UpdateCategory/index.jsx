import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./updateCategory.scss";
import axios from "axios";


export const UpdateCategory = ({ onClose, categoryData, reFetch }) => {
    console.log(categoryData)
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        link: "",
        color: "",
        popular: categoryData?.popular || false
    });

    const handleUpdateCategory = async (e) => {
        e.preventDefault();

        const updatedData = new FormData();

        if (formData.name) {
            updatedData.append("name", formData.name);
        }

        if (formData.link) {
            updatedData.append("link", formData.link);
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
            const response = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?id=${categoryData?.id}`, updatedData);

            console.log("Kategori güncellendi:", response.data);
            reFetch()
            onClose(); // Güncelleme işlemi tamamlandığında bileşeni kapat

            return response.data;
        } catch (error) {
            console.error("Kategori güncelleme sırasında hata oluştu:", error);
            throw error;
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

                {/* category link */}
                <div className="formController">
                    <label> category link:</label>
                    <input
                        className="newCategory"
                        type="text"
                        placeholder={categoryData?.link}
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}

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
        </div>
    )
}
