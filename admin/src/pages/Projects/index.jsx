import "./project.scss"
import { Header, Loading, ProjectList } from "../../components"
import useFetch from "../../hooks/useFetch";
export const Projects = () => {

    const { data: projects, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}projects`
    );
    return (
        <div className="projectPage">
            <Header title="project" reFetch={reFetch} />

            <>
                {
                    loading ? <Loading /> : (
                        <div className="projectWrapper">
                            {projects && projects.map(project => (
                                <ProjectList key={project?.id} project={project} reFetch={reFetch} />
                            ))}
                        </div>
                    )
                }
            </>
        </div>
    )
}
