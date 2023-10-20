import axios from "axios";
import "./categoryList.scss"
import { useState } from "react";
import { UpdateCategory } from "..";
export const CategoryList = ({ category, reFetch }) => {
    const { name, image, link, color, popular, id } = category;

    const deleteBlog = async (id) => {
        try {
            console.log(id)
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?id=${id}`);
            reFetch()
        } catch (error) {
            console.error("Kategori silinirken hata oluştu:", error);
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
        <div className={`categoryCard ${popular ? 'popular' : ''}`}>
            <div className="category-image">
                <img
                    style={{ width: "100px" }}
                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${category?.image}`}
                />
            </div>
            <div className="categoryDetails">
                <h2 className="category-title">{name}</h2>
            </div>
            <div className="colorContainer" style={{ background: color }} />

            <div className="buttonContainer">
                <button className="actionButton delete" onClick={() => deleteBlog(id)}>
                    Delete
                </button>
                <button className="actionButton update" onClick={openModal} >
                    Update
                </button>
            </div>
            {modalVisible && (
                <UpdateCategory
                    categoryData={category}
                    onClose={closeModal}
                    reFetch={reFetch}
                />
            )}
        </div>
    )
}


