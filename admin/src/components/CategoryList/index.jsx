import axios from "axios";
import "./categoryList.scss"
import { useState } from "react";
import { Error, UpdateCategory } from "..";
import PropTypes from 'prop-types';

export const CategoryList = ({ category, reFetch }) => {
    const { name, image, color, popular, id } = category;

    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/api/categories/category?id=${id}`);
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
            {error && <Error error={errorMessage} />}

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

