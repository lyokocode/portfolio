import axios from "axios";
import "./categoryList.scss"
import { useState } from "react";
import { UpdateCategory } from "@/components";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

export const CategoryList = ({ category, reFetch }) => {
    const { name, image, color, popular, id } = category;
    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}categories/category?id=${id}`, { withCredentials: true });
            reFetch()
            toast.warn("Ctegory deleted!", {
                position: "bottom-right"
            });
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });
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
                    // style={{ width: "100px" }}
                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${image}`}
                />
            </div>
            <div className="categoryDetails">
                <h2 className="category-title">{name}</h2>
            </div>
            <div className="colorContainer" style={{ background: color }} />

            <div className="buttonContainer">
                <button className="actionButton update" onClick={openModal} >
                    Update
                </button>

                <button className="actionButton delete" onClick={() => deleteBlog(id)}>
                    Delete
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
CategoryList.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        color: PropTypes.string,
        popular: PropTypes.bool,
        id: PropTypes.number
    }),
    reFetch: PropTypes.func
};

