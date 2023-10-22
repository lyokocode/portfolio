import { Error, Header, Loading } from "../../components";
import useFetch from "../../hooks/useFetch";
import { UserList } from "../../components"
import "./user.scss"
export const Users = () => {
    const { data: users, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/users`
    );
    return (
        <div className="userPage">
            <Header title="user" reFetch={reFetch} />

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
                                            <th className="center">Phone Number</th>
                                            <th className="center">Status</th>
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
