import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./newProject.scss"


export const NewProject = () => {

    const navigate = useNavigate()

    const [projectData, setProjectData] = useState({
        image: null,
        title: '',
        description: "",
        date: "",
        categories: [],
        projectLink: '',
        githubLink: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        if (name === 'categories') {
            // Kategorileri diziye ekleyin
            setProjectData({
                ...projectData,
                categories: newValue.split(',').map((category) => category.trim()),
            });
        } else {
            setProjectData({
                ...projectData,
                [name]: newValue,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', projectData.image);
        formData.append('title', projectData.title);
        formData.append('description', projectData.description);
        formData.append('date', projectData.date);
        formData.append('categories', projectData.categories);
        formData.append('projectLink', projectData.projectLink);
        formData.append('githubLink', projectData.githubLink);

        try {
            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/projects`, formData);
            navigate("/projects")
        } catch (error) {
            console.error('Kategori oluşturulurken bir hata oluştu:', error);
        }
    }


    return (
        <div className="create-category-form">
            <h1>Yeni Kategori Oluştur</h1>


            <form className="newBlogForm" onSubmit={handleSubmit}>

                {/* project name */}
                <div className="form-group">
                    <label htmlFor="name">proje Adı:</label>
                    <input
                        type="text"
                        name="title"
                        value={projectData.title}
                        onChange={handleChange}
                    />
                </div>

                {/* project image */}
                <div className="form-group">
                    <label htmlFor="image">Resim Seç:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </div>

                {/* project description */}
                <div className="form-group">
                    <label> project description:</label>
                    <textarea
                        name="description"
                        type="textarea"
                        value={projectData.description}
                        onChange={handleChange}
                    />
                </div>

                {/* project categories */}
                <div className="form-group">
                    <label> project categories:</label>
                    <input
                        className="newBlog"
                        name="categories"
                        type="text"
                        value={projectData.categories}
                        onChange={handleChange}
                    />
                </div>

                {/* project date */}
                <div className="form-group">
                    <label> project date:</label>
                    <input
                        name="date"
                        type="date"
                        className="newBlog"
                        value={projectData.date}
                        onChange={handleChange}
                    />
                </div>

                {/* project github link */}
                <div className="form-group">
                    <label> github link:</label>
                    <input
                        className="newBlog"
                        name="githubLink"
                        type="text"
                        value={projectData.githubLink}
                        onChange={handleChange}
                    />
                </div>
                {/* project link */}
                <div className="form-group">
                    <label> project link:</label>
                    <input
                        className="newBlog"
                        name="projectLink"
                        type="text"
                        value={projectData.projectLink}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">proje Oluştur</button>

            </form>
        </div>
    )
}
