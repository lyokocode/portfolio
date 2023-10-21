import "./project.scss"
import { Header } from "../../components"
import useFetch from "../../hooks/useFetch";
import { ProjectList } from "../../components";
export const Projects = () => {

    const { data: projects, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/projects`
    );
    return (
        <div className="projectPage">
            <Header title="project" reFetch={reFetch} />

            <>
                {
                    loading ? ("loading") : (error ? "error" : (
                        <div className="projectWrapper">
                            {projects && projects.map(project => (
                                <ProjectList key={project?.id} project={project} reFetch={reFetch} />
                            ))}
                        </div>
                    ))
                }
            </>
        </div>
    )
}
