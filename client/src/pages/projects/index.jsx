import { ProjectList } from "../../components"
import "./projects.scss"
export const Projects = () => {
    return (
        <div className="projectsPage">
            <h1 className="title">Projects</h1>
            <div className="content">
                <ProjectList />
            </div>
        </div>
    )
}
