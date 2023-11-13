import { Error, Loading } from "../../components";
import useFetch from "../../hooks/useFetch";
import { UserList } from "../../components"
import "./user.scss"
import { AiOutlineReload } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

export const Users = () => {

    const { auth } = useSelector(state => state.auth)

    const { data: users, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/users`
    );

    return (
        <div className="userPage">
            <header className="pageHeader">
                <input
                    className="searchInput"
                    type="text"
                    placeholder={`search to users`}
                />
                {auth.isAdmin ? (
                    <Link to="/user-create" className="createBtn">
                        Create a new user
                    </Link>
                ) : (<></>)}
                <button
                    className="reloadBtn"
                    onClick={() => reFetch ? reFetch() : console.log("yenilenemedi")}>
                    <AiOutlineReload className="reloadIcon" />
                </button>
            </header>
            <div className="container">
                {
                    loading ? <Loading /> : (error ? <Error error={error.message} /> : (
                        <div className="userWrapper">
                            <div className="content">
                                <table className="table">
                                    {/* thead */}
                                    <thead>
                                        <tr>
                                            <th className="left">Full Name</th>
                                            <th className="left">Email</th>
                                            <th className="center">User ID</th>
                                            <th className="center">Role</th>
                                            <th className="center">Actions</th>
                                        </tr>
                                    </thead>
                                    {users && users.map(user => (
                                        <UserList key={user.id} user={user} reFetch={reFetch} />
                                    ))}
                                </table>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
