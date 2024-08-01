import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
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

Header.propTypes = {
    title: PropTypes.string.isRequired,
    reFetch: PropTypes.func,
};