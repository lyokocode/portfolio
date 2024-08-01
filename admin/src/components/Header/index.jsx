import { Link, useLocation } from "react-router-dom";
import "./header.scss"

export const Header = ({ title, reFetch }) => {
    return (
        <header className="header">
            <Link to="create" className="link">
                <h1>Create new {title} </h1>
            </Link>
            <button onClick={reFetch ? () => reFetch() : null} className="refetch">
                yenile
            </button>
        </header>
    )
}