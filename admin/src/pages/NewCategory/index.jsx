import "./newCategory.scss"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const NewCategory = () => {

    const navigate = useNavigate()

    const [categoryData, setCategoryData] = useState({
        name: '',
        link: '',
        color: '',
        popular: false,
        image: null, // Resim dosyası için null başlangıç değeri
    });


    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        setCategoryData({
            ...categoryData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // FormData oluştur
        const formData = new FormData();
        formData.append('name', categoryData.name);
        formData.append('link', categoryData.link);
        formData.append('color', categoryData.color);
        formData.append('popular', categoryData.popular);
        formData.append('image', categoryData.image);

        // Axios ile POST isteği gönder
        try {
            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/categories`, formData);

            navigate("/categories")
        } catch (error) {
            console.error('Kategori oluşturulurken bir hata oluştu:', error);
        }
    };
    return (
        <div className="create-category-form">
            <h1>Yeni Kategori Oluştur</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Kategori Adı:</label>
                    <input
                        type="text"
                        name="name"
                        value={categoryData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="link">Link:</label>
                    <input
                        type="text"
                        name="link"
                        value={categoryData.link}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="color">Renk:</label>
                    <input
                        type="text"
                        name="color"
                        value={categoryData.color}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="popular">Popüler mi?</label>
                    <input
                        type="checkbox"
                        name="popular"
                        checked={categoryData.popular}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Resim Seç:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-button">Kategori Oluştur</button>
            </form>
        </div>
    )
}
