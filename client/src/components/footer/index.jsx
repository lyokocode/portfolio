import { Link } from "react-router-dom"
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import "./footer.scss"
import { FaYoutube } from "react-icons/fa"
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="info">
                <div className="logo">
                    <img src="/logo.png" alt="aelita blog" width={50} height={50} className="img" />
                    <h1 className="logoText">Aelita Blog</h1>
                </div>
                <p className="desc">
                    {"Thank you for visiting my blog page. I'm a Full Stack Developer, working on PERN stack projects. I take pride in offering content about the latest technology trends and innovations in the software world. I'm here to provide you with the best experience. If you have any questions or suggestions, please don't hesitate to contact me. Keep following and stay updated on the world of software"}
                </p>
                <div className="icons">
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
            </div>
            <div className="links">
                <div className="list">
                    <span className="listTitle">Links</span>
                    <Link to="/">Homepage</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/projects">projects</Link>
                </div>
                <div className="list">
                    <span className="listTitle">Tags</span>
                    <Link to="/">React</Link>
                    <Link to="/">NextJS</Link>
                    <Link to="/">JavaScript</Link>
                    <Link to="/">Scss</Link>
                </div>
                <div className="list">
                    <span className="listTitle">Social</span>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mustafa-uşaklı-12887521b/">linkedin</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/lyokocode" to="/">github</a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Mustafausakli">twitter</a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCEbXfmk9rhjE0qeoc3ykDDg">youtube</a>
                </div>
            </div>
        </footer>

    )
}
