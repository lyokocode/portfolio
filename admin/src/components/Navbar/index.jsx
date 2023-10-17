import "./navbar.scss"
{/* <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog.image}?t=2023-10-13T10%3A09%3A55.558Z`} alt="" className="image" /> */ }
import { useSelector } from 'react-redux'


export const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    console.log(user)

    return (
        <nav className="navbar">
            <div className="logo">
                {"<Aelita />"}
            </div>
            <div className="userInfo">
                <>
                    <div className="userImage">
                        <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${user?.avatar}`} alt="" className="image" />

                    </div>
                    <p className="userName"> {user?.fullName}</p>
                </>
            </div>
            <button className="logoutBtn">
                log out
            </button>

        </nav>
    )
}
