import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"

export const AuthLinks = () => {
    //temporay

    const [open, setOpen] = useState(false)

    return (
        <div className="authLinks" >

            {/* menu & close button */}
            <button className="modalbtn" onClick={() => setOpen(!open)}>
                {open ? (
                    <AiOutlineClose className="burger" size={22} />
                ) : (
                    <AiOutlineMenu className="burger" size={22} />
                )}
            </button>
            {/* responsive modal */}
            {open && (
                <div className="responsiveMenu" onClick={() => setOpen(false)}>
                    <Link to="/">Homepage</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/projects">Projects</Link>
                    {status === "notauthenticated" ? (
                        <Link to="/">Login</Link>
                    ) : (
                        <button className="link">Logout</button>
                    )}
                </div>
            )}
        </div>
    )
}
