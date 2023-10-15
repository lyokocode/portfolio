import useFetch from "../../hooks/useFetch";
import { Project } from "../project"
import "./projectList.scss"

export const ProjectList = () => {
    const { data: projects, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/projects`
    );
    if (loading) {
        return "loading"
    } else if (error) {
        return "there is a problem"
    } else {
        return (
            <div className="projectList">
                <h2 className="projectTitle">Recent Projects</h2>
                {projects ? (
                    projects.map(project => (
                        <Project key={project.id} project={project} />

                    ))
                ) : ("projects not found")}

            </div>
        )
    }
}
