import "./navbar.scss"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/authSlice';
import axios from "axios"

export const Navbar = () => {
    const { auth } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleLogout = async () => {
        if (auth) {
            try {
                await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/auth/logout/${auth.id}`);
                dispatch(logout());
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="https://aelita.vercel.app">
                    {"<Aelita />"}
                </a>
            </div>
            <div className="userInfo">
                <div className="userImage">
                    <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${auth?.avatar}`} alt="" className="image" />

                </div>
                <p className="userName"> {auth?.fullName}</p>
            </div>
            <button
                className="logoutBtn"
                onClick={handleLogout}
            >
                log out
            </button>

        </nav>
    )
}
