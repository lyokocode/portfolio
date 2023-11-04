import { AiOutlineReload } from "react-icons/ai"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import "./header.scss"

export const Header = ({ reFetch, title }) => {
    return (
        <header className="pageHeader">
            <input
                className="searchInput"
                type="text"
                placeholder={`search to ${title}`}
            />
            <Link to="./create" className="createBtn">
                Create a new {title}
            </Link>
            <button
                className="reloadBtn"
                onClick={() => reFetch && reFetch()}>
                <AiOutlineReload className="reloadIcon" />
            </button>
        </header>
    )
}


Header.propTypes = {
    reFetch: PropTypes.func,
    title: PropTypes.string.isRequired
};