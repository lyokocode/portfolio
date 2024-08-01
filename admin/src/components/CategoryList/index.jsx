import "./categoryList.scss"
import { useState } from "react";
import { Action, UpdateCategory } from "@/components";
import PropTypes from 'prop-types';

export const CategoryList = ({ category, reFetch }) => {
    const { name, image, color, popular, id } = category;

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={`categoryCard ${popular ? 'popular' : ''}`}>

            <div className="category-image">
                <img
                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${image}`}
                />
            </div>

            <div className="categoryDetails">
                <h2 className="category-title">{name}</h2>
            </div>

            <div className="colorContainer" style={{ background: color }} />

            <Action
                reFetch={reFetch}
                setModalVisible={setModalVisible}
                endpoint={`categories/category?id=${id}`}
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

