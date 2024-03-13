import useFetch from "@/hooks/useFetch";
import { Project, Loading, Error } from "@/components"
import "./projectList.scss"

export const ProjectList = () => {
    const { data: projects, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/projects`
    );

    return (
        <div className="projectList">
            <h2 className="projectTitle">Recent Projects</h2>
            {
                loading ? <Loading /> : (error ? <Error /> : (
                    <>
                        {projects && (
                            projects.map(project => (
                                <Project key={project.id} project={project} />
                            ))
                        )}
                    </>
                ))
            }
        </div>
    )
}
