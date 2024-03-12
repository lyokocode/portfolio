import { Link } from "react-router-dom"
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { FaYoutube } from "react-icons/fa";
import "./navbar.scss"
import { AuthLinks, ThemeToggle } from "@/components"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="social">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mustafa-uşaklı-12887521b/">
                    <AiFillLinkedin size={24} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/lyokocode">
                    <AiOutlineGithub size={24} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Mustafausakli">
                    <AiOutlineTwitter size={24} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCEbXfmk9rhjE0qeoc3ykDDg">
                    <FaYoutube size={24} />
                </a>
            </div>
            <h1 className="logo">
                <Link to="/">
                    {"<Aelita />"}
                </Link>
            </h1>
            <div className="links">
                <ThemeToggle />
                <Link to="/" className="link">Homepage</Link>
                <Link to="/blogs" className="link">Blogs</Link>
                <Link to="/projects" className="link">projects</Link>
                <AuthLinks />
            </div>
        </nav>
    )
}
