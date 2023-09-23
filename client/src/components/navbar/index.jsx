import { Link } from "react-router-dom"
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import "./navbar.scss"
import { AuthLinks, ThemeToggle } from ".."

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="social">
                <a href="#">
                    <AiFillLinkedin size={24} />
                </a>
                <a href="#">
                    <AiOutlineGithub size={24} />
                </a>
                <a href="#">
                    <AiOutlineTwitter size={24} />
                </a>
            </div>
            <h1 className="logo">{"<Aelita />"}</h1>
            <div className="links">
                <ThemeToggle />
                <Link to="/" className="link">Homepage</Link>
                <Link to="/" className="link">Blogs</Link>
                <Link to="/" className="link">projects</Link>
                <AuthLinks />
            </div>
        </nav>
    )
}
