import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./newUser.scss"
import { useSelector } from 'react-redux'
import { Error } from "../../components";


export const NewUser = () => {

    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)


    const { user } = useSelector(state => state.auth)

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
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

        setUserData({
            ...userData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('fullName', userData.fullName);
        formData.append('userName', userData.userName);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('avatar', userData.avatar);
        formData.append('isAdmin', userData.isAdmin);

        try {
            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/auth/register`, formData);

            navigate("/users")
        } catch (error) {
            serError(true)
            setErrorMessage(error?.response?.data?.message)
        }
    };

    useEffect(() => {
        if (!user.isAdmin) {
            navigate("/")
        }
    }, [user])


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
                        value={userData.fullName}
                        onChange={handleChange}
                    />
                </div>

                {/* userName */}
                <div className="form-group">
                    <label htmlFor="name">user name:</label>
                    <input
                        type="text"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                    />
                </div>

                {/* email */}
                <div className="form-group">
                    <label htmlFor="name">email:</label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* password */}
                <div className="form-group">
                    <label htmlFor="name">password:</label>
                    <input
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* is admin? */}
                <div className="formController">
                    <label>is admin?:</label>
                    <select
                        name="isAdmin"
                        value={userData.isAdmin}
                        onChange={handleChange}
                        defaultValue="false"
                    >
                        <option value=""></option>
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
            {error && <Error error={errorMessage} />}
        </div>
    )
}
