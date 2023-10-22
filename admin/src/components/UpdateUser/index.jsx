import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./updateUser.scss"
import axios from "axios";

export const UpdateUser = ({ onClose, userData, reFetch }) => {
    console.log(userData)

    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        avatar: null,
        email: "",
        password: "",
        isAdmin: "",
    });

    const updateUser = async (e) => {
        e.preventDefault();
        const updatedData = new FormData();

        if (formData.fullName) {
            updatedData.append("fullName", formData.fullName);
        }

        if (formData.avatar) {
            updatedData.append("newImage", formData.avatar);
        }

        if (formData.userName) {
            updatedData.append("userName", formData.userName);
        }

        if (formData.email) {
            updatedData.append("email", formData.email);
        }

        if (formData.password) {
            updatedData.append("password", formData.password);
        }

        if (formData.isAdmin) {
            updatedData.append("isAdmin", formData.isAdmin);
        }


        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?id=${userData?.id}`, updatedData);

            console.log("User güncellendi:", response.data);
            reFetch()
            onClose();

            return response.data;

        } catch (error) {
            console.error("Proje güncelleme sırasında hata oluştu:", error);
            throw error;
        }
    }

    return (
        <div className="updateProject">
            {/* close button */}
            <button
                onClick={onClose}
                className="closeBtn"
            >
                <AiOutlineClose size={25} />
            </button>
            <header className="updateProjectHeader">
                Update Project
            </header>
            <form
                onSubmit={updateUser}
                className="updateProjectForm"
            >
                {/* User Image */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">User image:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newProject"
                            onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })}
                        />
                        <div className="updateProjectImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${userData?.avatar}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* User Name */}
                <div className="formController">
                    <label> User name:</label>
                    <input
                        className="newProject"
                        type="text"
                        placeholder={userData?.userName}
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}

                    />
                </div>
                {/* Full Name */}
                <div className="formController">
                    <label> User full name:</label>
                    <input
                        className="newProject"
                        type="text"
                        placeholder={userData?.fullName}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}

                    />
                </div>


                {/* User email */}
                <div className="formController">
                    <label> user email:</label>
                    <input
                        className="newProject"
                        type="text"
                        placeholder={userData?.email}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                    />
                </div>


                {/* User password */}
                <div className="formController">
                    <label> user password:</label>
                    <input
                        className="newProject"
                        type="text"
                        placeholder="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                {
                    userData && userData.isAdmin && (
                        <div className="formController">
                            <label>Admin:</label>
                            <select
                                value={formData.isAdmin}
                                onChange={(e) => setFormData({ ...formData, isAdmin: e.target.value })}
                            >
                                <option value="false">false</option>
                                <option value="true">true</option>
                            </select>
                        </div>
                    )
                }


                <button className="post-btn" type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}
