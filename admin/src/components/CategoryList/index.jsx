import PropTypes from 'prop-types';
import { useState } from "react";
import { Action, UpdateCategory } from "@/components";
import "./categoryList.scss"

export const CategoryList = ({ category, reFetch }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={`categoryCard ${category.popular ? 'popular' : ''}`}>

            <div className="category-image">
                <img
                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${category.image}`}
                />
            </div>

            <div className="categoryDetails">
                <h2 className="category-title">{category.name}</h2>
            </div>

            <div className="colorContainer" style={{ background: category.color }} />

            <Action
                reFetch={reFetch}
                setModalVisible={setModalVisible}
                endpoint={`categories/category?id=${category.id}`}
                title="category"
            />

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

