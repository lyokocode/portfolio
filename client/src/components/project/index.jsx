import "./project.scss"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
import PropTypes from 'prop-types';

export const Project = ({ project }) => {

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
                    <div className="links">
                        <AiFillGithub size={20} />
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="link">github</a>
                    </div>
                    <div className="links">
                        <a href={project.projectLink} target="_blank" rel="noreferrer" className="link">project</a>
                        <AiOutlineLink size={20} />
                    </div>
                </div>
            </div>
        </article>
    )
}

Project.propTypes = {
    project: PropTypes.shape({
        date: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        githubLink: PropTypes.string,
        projectLink: PropTypes.string
    }).isRequired
};
