import { Link } from "react-router-dom"
import "./project.scss"
export const Project = ({ project }) => {
    return (
        <article className="project">
            <div className="imageContainer">
                <img src={project.image} alt="" className="image" />
            </div>
            <div className="textContainer">
                <div className="detail">
                    <span className="date">{project.date}</span>
                    -
                    <ul className="category">
                        {project.category ? project.category.map((cat, i) => (
                            <li key={i}>{cat}</li>
                        )) : ("-")}
                    </ul>
                </div>
                <h1 className="postTitle">Kuzey Tekel</h1>
                <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nostrum sunt fugiat nisi numquam aspernatur?</p>
                <div className="linkContainer">
                    <a href={project.githubLink} className="link">github</a>
                    <Link href={project.projectLink} className="link">project</Link>
                </div>
            </div>
        </article>
    )
}
