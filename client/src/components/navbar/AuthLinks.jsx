import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"

export const AuthLinks = () => {
    //temporay
    const status = "notauthenticated"

    const [open, setOpen] = useState(false)

    return (
        <div className="authLinks">
            {/* user status */}
            {status === "notauthenticated" ? (
                <Link to="/" className="link">Login</Link>
            ) : (
                <button>logout</button>
            )

            }
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
                <div className="responsiveMenu">
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
