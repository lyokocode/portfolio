import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./newUser.scss"

export const NewUser = () => {

    const navigate = useNavigate()

    const [categoryData, setCategoryData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        avatar: null,
        isAdmin: null,
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

        const formData = new FormData();
        formData.append('fullName', categoryData.fullName);
        formData.append('userName', categoryData.userName);
        formData.append('email', categoryData.email);
        formData.append('password', categoryData.password);
        formData.append('avatar', categoryData.avatar);
        formData.append('isAdmin', categoryData.isAdmin);

        try {
            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/auth/register`, formData);

            navigate("/users")
        } catch (error) {
            console.error('Kategori oluşturulurken bir hata oluştu:', error);
        }
    };


    return (
        <div className="create-category-form">
            <h1>Yeni Kullanıcı Oluştur</h1>
            <form onSubmit={handleSubmit}>

                {/* fullname */}
                <div className="form-group">
                    <label htmlFor="name">full name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={categoryData.fullName}
                        onChange={handleChange}
                    />
                </div>

                {/* userName */}
                <div className="form-group">
                    <label htmlFor="name">user name:</label>
                    <input
                        type="text"
                        name="userName"
                        value={categoryData.userName}
                        onChange={handleChange}
                    />
                </div>

                {/* email */}
                <div className="form-group">
                    <label htmlFor="name">email:</label>
                    <input
                        type="text"
                        name="email"
                        value={categoryData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* password */}
                <div className="form-group">
                    <label htmlFor="name">password:</label>
                    <input
                        type="text"
                        name="password"
                        value={categoryData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* is admin? */}
                <div className="formController">
                    <label>is admin?:</label>
                    <select
                        name="isAdmin"
                        value={categoryData.isAdmin}
                        onChange={handleChange}
                        defaultValue="false"
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Resim Seç:</label>
                    <input
                        type="file"
                        name="avatar"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">create new user</button>

            </form>
        </div>
    )
}
