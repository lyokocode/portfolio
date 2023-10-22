import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./updateProject.scss";
import axios from "axios";


export const UpdateProject = ({ onClose, projectData, reFetch }) => {

    const [formData, setFormData] = useState({
        title: "",
        image: null,
        date: "",
        categories: projectData.categories || [],
        description: "",
        projectLink: "",
        githubLink: "",
    });

    const handleUpdateProject = async (e) => {
        e.preventDefault();
        const updatedData = new FormData();

        if (formData.title) {
            updatedData.append("title", formData.title);
        }

        if (formData.image) {
            updatedData.append("newImage", formData.image);
        }

        if (formData.date) {
            updatedData.append("date", formData.date);
        }

        if (formData.categories) {
            updatedData.append("categories", formData.categories);
        }

        if (formData.description) {
            updatedData.append("description", formData.description);
        }

        if (formData.projectLink) {
            updatedData.append("projectLink", formData.projectLink);
        }

        if (formData.githubLink) {
            updatedData.append("githubLink", formData.githubLink);
        }


        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/projects/project?id=${projectData?.id}`, updatedData);

            console.log("Proje güncellendi:", response.data);
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
                onSubmit={handleUpdateProject}
                className="updateProjectForm"
            >
                {/* Project Image */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">Project image:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newProject"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                        <div className="updateProjectImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/projects/${projectData?.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* Project name */}
                <div className="formController">
                    <label> Project name:</label>
                    <input
                        className="newProject"
                        type="text"
                        placeholder={projectData?.title}
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}

                    />
                </div>

                {/* Project date */}
                <div className="formController">
                    <label >Date:</label>
                    <input
                        type="date"
                        className="newBlog"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                </div>

                {/* Project categories */}
                <div className="formController">
                    <label> Project categories:</label>
                    <input
                        className="newProject"
                        type="text"
                        placeholder="test edeceğim"
                        value={formData.categories}
                        onChange={(e) => setFormData({ ...formData, categories: e.target.value })}

                    />
                </div>



                {/* Project description */}
                <div className="formController">
                    <label> description:</label>
                    <textarea
                        className="newBlog"
                        type="text"
                        placeholder={projectData?.description}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>



                {/* project link */}
                <div className="formController">
                    <label> project link:</label>
                    <input
                        className="newCategory"
                        type="text"
                        placeholder={projectData?.projectLink}
                        value={formData.projectLink}
                        onChange={(e) => setFormData({ ...formData, projectLink: e.target.value })}
                    />
                </div>

                {/* github link */}
                <div className="formController">
                    <label> github link:</label>
                    <input
                        className="newCategory"
                        type="text"
                        placeholder={projectData?.githubLink}
                        value={formData.githubLink}
                        onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                    />
                </div>

                <button className="post-btn" type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}
