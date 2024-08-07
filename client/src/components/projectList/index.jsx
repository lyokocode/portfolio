import useFetch from "@/hooks/useFetch";
import { Project, Loading, Error } from "@/components"
import "./projectList.scss"

export const ProjectList = () => {
    const { data: projects, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/projects`
    );

    // JSON-LD Schema.org verisi
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": projects ? projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": project.title,
            "url": `${import.meta.env.VITE_REACT_BASE_URL}/projects/${project.id}`
        })) : []
    };

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
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </div>
    )
}
