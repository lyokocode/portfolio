import { Link } from "react-router-dom"
import "./project.scss"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
export const Project = ({ project }) => {
    console.log(project)
    return (
        <article className="project">
            <div className="imageContainer">
                <img
                    src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/projects/${project.image}`}
                    alt=""
                    className="image" />
            </div>
            <div className="textContainer">
                <div className="detail">
                    <span className="date">{project.date}</span>
                    -
                    <ul className="category">
                        {project.categories ? project?.categories?.map((cat, i) => (
                            <li key={i}>{cat}</li>
                        )) : ("-")}
                    </ul>
                </div>
                <h1 className="postTitle">{project.title}</h1>
                <p className="postDesc">{project.description}</p>
                <div className="linkContainer">
                    <div className="test">
                        <AiFillGithub size={20} />
                        <a href={project.githubLink} target="_blank" className="link">github</a>
                    </div>
                    <div className="test">
                        <a href={project.projectLink} target="_blank" className="link">project</a>
                        <AiOutlineLink size={20} />
                    </div>
                </div>
            </div>
        </article>
    )
}
