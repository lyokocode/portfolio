import "./projectList.scss"
import axios from "axios"

export const ProjectList = ({ project, reFetch }) => {


    const deleteProject = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/api/projects/project?id=${project.id}`);
            reFetch()
        } catch (error) {
            console.error("Proje silinirken hata oluştu:", error);
        }
    };

    return (
        <div className="projectList">
            <img
                className="projectImage"
                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/projects/${project.image}`}
                alt="project image"
            />
            <div className="projectInfo">
                <p>{project?.title}</p>
            </div>
            <div className="buttonContainer">
                <button className="updateBtn" >update</button>
                <button className="deleteBtn" onClick={() => deleteProject()}>delete</button>
            </div>
        </div>
    )
}
