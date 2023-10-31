import "./sidebar.scss"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MdDashboard, MdNotifications, MdSettingsSystemDaydream, MdOutlinePsychology, MdSettingsApplications } from "react-icons/md"
import { AiOutlineUser, AiOutlineProject, AiOutlineEdit } from "react-icons/ai"
import { BiCategory, BiLogoBlogger, BiUserCircle } from "react-icons/bi"
import { createModal, useModals } from "../../utils/modal"
import Modal from "../../modals"


export const Sidebar = () => {
    const { user } = useSelector(state => state.auth)

    const modals = useModals()


    return (
        <div className='sidebar '>
            {modals.length > 0 && <Modal />}
            <div className="top">
                <Link to="/">
                    <h1 className="logo">aelita</h1>
                </Link>
            </div>
            <div className="hr"></div>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <Link to="/">
                        <li>
                            <MdDashboard className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">Lists</p>
                    {
                        user?.isAdmin && (
                            <Link to="/users">
                                <li>
                                    <AiOutlineUser className="icon" />
                                    <span>Users</span>
                                </li>
                            </Link>
                        )
                    }
                    <Link to="/blogs">
                        <li>
                            <BiLogoBlogger className="icon" />
                            <span>Blogs</span>
                        </li>
                    </Link>
                    <Link to="/categories">
                        <li>
                            <BiCategory className="icon" />
                            <span>Categories</span>
                        </li>
                    </Link>
                    <Link to="/projects">
                        <li>
                            <AiOutlineProject className="icon" />
                            <span>Projects</span>
                        </li>
                    </Link>
                    <p className="title">Useful</p>
                    <li>
                        <MdNotifications className="icon" />
                        <span>Notifications</span>
                    </li>
                    <Link to="/editor">
                        <li>
                            <AiOutlineEdit className="icon" />
                            <span>Editor</span>
                        </li>
                    </Link>
                    <p className="title">Service</p>
                    <button onClick={() => {
                        createModal("systemHealth")
                    }}>
                        <MdSettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </button>
                    <li>
                        <MdOutlinePsychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <button onClick={() => {
                        createModal("appeparance")
                    }}>
                        <MdSettingsApplications className="icon" />
                        <span>Settings</span>
                    </button>
                    <p className="title">User</p>
                    <Link to={`/users/${user.id}`}>
                        <li>
                            <BiUserCircle className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>

                </ul>
            </div>

        </div>
    )
}
