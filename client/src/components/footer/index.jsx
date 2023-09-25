import { Link } from "react-router-dom"
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import "./footer.scss"
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="info">
                <div className="logo">
                    <img src="/logo.png" alt="aelita blog" width={50} height={50} className="img" />
                    <h1 className="logoText">Aelita Blog</h1>
                </div>
                <p className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                    porro sequi, totam minima consequuntur, aspernatur deleniti vero
                    repellendus dorales.
                </p>
                <div className="icons">
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
            </div>
            <div className="links">
                <div className="list">
                    <span className="listTitle">Links</span>
                    <Link to="/">Homepage</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/">projects</Link>
                    <Link to="/">Contact</Link>
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
                    <Link to="/">github</Link>
                    <Link to="/">linkedin</Link>
                    <Link to="/">twitter</Link>
                </div>
            </div>
        </footer>

    )
}
