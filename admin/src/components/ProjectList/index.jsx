import "./projectList.scss"
export const ProjectList = ({ project, reFetch }) => {
    console.log(project)
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
                <button className="deleteBtn">delete</button>
            </div>
        </div>
    )
}
