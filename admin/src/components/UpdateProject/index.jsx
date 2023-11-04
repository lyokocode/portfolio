import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md"
import "./updateProject.scss";

export const UpdateProject = ({ onClose, projectData, reFetch }) => {

    const [formData, setFormData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();

            for (const key in formData) {
                form.append(key, formData[key]);
            }
            await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/projects/project?id=${projectData?.id}`, form);

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
        <div className="updateProject">

            <div className="updateContainer">
                {/* page header */}
                <header className="top">
                    <h1>Update Project</h1>

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
                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/projects/${projectData?.image}`}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            {/* Project name */}
                            <div className="formInput">
                                <label> blog name:</label>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder={projectData?.title}
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Project description */}
                            <div className="formInput">
                                <label> description:</label>
                                <textarea
                                    name="description"
                                    type="text"
                                    placeholder={projectData?.description}
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Github link */}
                            <div className="formInput">
                                <label> Github link</label>
                                <input
                                    name="githubLink"
                                    type="text"
                                    placeholder={projectData?.githubLink}
                                    value={formData.githubLink}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Project Link */}
                            <div className="formInput">
                                <label> Project Link:</label>
                                <input
                                    name="projectLink"
                                    type="text"
                                    placeholder={projectData?.projectLink}
                                    value={formData.projectLink}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Project Image */}
                            <div className="formInput">
                                <label htmlFor="file" style={{ cursor: "pointer" }}>
                                    <MdDriveFolderUpload size={35} />
                                </label>
                                <div>
                                    Project Image
                                </div>
                                <input
                                    type='file'
                                    id='file'
                                    name="newImage"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Project date */}
                            <div className="formInput">
                                <label >Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    defaultValue={projectData.date}
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Project Categories */}
                            <div className="formInput">
                                <label> Project Categories:</label>
                                <input
                                    name="categories"
                                    type="text"
                                    placeholder={projectData?.categories}
                                    value={formData.categories}
                                    onChange={handleChange}
                                />
                            </div>

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

UpdateProject.propTypes = {
    onClose: PropTypes.func.isRequired,
    projectData: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.string,
        categories: PropTypes.array,
        description: PropTypes.string,
        projectLink: PropTypes.string,
        githubLink: PropTypes.string,
    }),
    reFetch: PropTypes.func.isRequired,
};





