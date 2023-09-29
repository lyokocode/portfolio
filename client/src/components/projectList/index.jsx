import { projects } from "../../data"
import { Project } from "../project"
import "./projectList.scss"

export const ProjectList = () => {
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
