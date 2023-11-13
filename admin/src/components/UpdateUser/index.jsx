import { useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md"
import "./updateUser.scss"

export const UpdateUser = ({ onClose, userData, reFetch }) => {
    const { auth } = useSelector(state => state.auth)


    const [formData, setFormData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();

            for (const key in formData) {
                form.append(key, formData[key]);
            }
            await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?id=${userData?.id}`, form);

            reFetch()
            onClose();
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        const { name, type, checked, files, value } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };


    return (
        <div className="updateUser">

            <div className="updateContainer">

                {/* page header */}
                <header className="top">
                    <h1>Update User</h1>

                    {/* close button */}
                    <button
                        onClick={onClose}
                        className="closeBtn"
                    >
                        <AiOutlineClose size={25} />
                    </button>
                </header>

                <div className="bottom">
                    <div className="left">
                        <img
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${userData?.avatar}`}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>

                            {/* username */}
                            <div className="formInput">
                                <label> username:</label>
                                <input
                                    name="userName"
                                    type="text"
                                    placeholder={userData?.userName}
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* fullName */}
                            <div className="formInput">
                                <label> fullName:</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder={userData?.fullName}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* email */}
                            <div className="formInput">
                                <label> email:</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder={userData?.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* password */}
                            <div className="formInput">
                                <label> password:</label>
                                <input
                                    name="password"
                                    type="text"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Avatar */}
                            <div className="formInput">
                                <label htmlFor="file" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>
                                    User Image
                                </div>
                                <input
                                    type='file'
                                    id='file'
                                    name="newImage"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* isAdmin */}
                            {auth.isAdmin && (
                                <>
                                    <div className="formInput">
                                        <label>isAdmin:</label>
                                        <select
                                            value={formData.isAdmin}
                                            name="isAdmin"
                                            onChange={handleChange}
                                        >
                                            <option value=""></option>
                                            <option value="false">false</option>
                                            <option value="true">true</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {/* send button */}
                            <div className="formInput">
                                <button className="sendBtn" type="submit">
                                    Update
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

UpdateUser.propTypes = {
    onClose: PropTypes.func.isRequired,
    userData: PropTypes.shape({
        id: PropTypes.number,
        fullName: PropTypes.string,
        userName: PropTypes.string,
        avatar: PropTypes.string,
        email: PropTypes.string,
        isAdmin: PropTypes.bool,
    }),
    reFetch: PropTypes.func.isRequired,
};