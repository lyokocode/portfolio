
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Error } from '..';
import PropTypes from 'prop-types';
import axios from "axios"
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
export const UserList = ({ user, reFetch }) => {

    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)

    const deleteUser = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?id=${user.id}`, { withCredentials: true });
            reFetch()
        } catch (error) {
            serError(true)
            setErrorMessage(error?.response?.data?.message || "there is a problem on server")
        }
    };

    return (
        <tbody className="body" >
            <tr >
                {/* full name */}
                <td className=" left">
                    <div>
                        <div>
                            {
                                user?.avatar ? (
                                    <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${user?.avatar}`} alt="" className="image" />

                                ) : (<AiOutlineUser />)
                            }
                        </div>
                        <span >{user?.fullName}</span>
                    </div>
                </td>

                {/* email */}
                <td className="left">
                    <div >
                        <div >
                            <AiOutlineMail />
                        </div>
                        <span>{user?.email}</span>
                    </div>
                </td>

                {/* phone number */}
                <td className=" center users">
                    <div >
                        <span>{user?.id}</span>
                    </div>
                </td>

                {/* role */}
                <td className=" center role ">
                    <span className={`${user?.isAdmin ? "superAdmin" : "admin"}`}>{user?.isAdmin ? "Super Admin" : "Admin"}</span>
                </td>

                {/* actions */}
                <td className=" center actions ">
                    <div >
                        <Link to={`/users/${user?.id}`} className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </Link>
                        <button className="iconContainer" onClick={() => deleteUser()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            {error && <Error error={errorMessage} />}

        </tbody >
    )
}

UserList.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        fullName: PropTypes.string,
        avatar: PropTypes.string,
        email: PropTypes.string,
        isAdmin: PropTypes.bool,
    }),
    reFetch: PropTypes.func.isRequired,
};