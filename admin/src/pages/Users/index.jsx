import { Header, Loading } from "@/components";
import useFetch from "@/hooks/useFetch";
import { UserList } from "@/components"
import "./user.scss"

export const Users = () => {

    const { data: users, loading, error, reFetch } = useFetch(`users`);

    if (error) return "error"

    return (
        <div className="userPage">

            <Header
                title="user"
                reFetch={reFetch}
            />

            <div className="container">
                {
                    loading ? <Loading /> : (
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
                                    {users && users?.map(user => (
                                        <UserList key={user.id} user={user} reFetch={reFetch} />
                                    ))}
                                </table>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
