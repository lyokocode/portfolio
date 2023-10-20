import "./sidebar.scss"
import { Link } from 'react-router-dom'

import { MdDashboard, MdNotifications, MdSettingsSystemDaydream, MdOutlinePsychology, MdSettingsApplications } from "react-icons/md"
import { AiOutlineUser, AiOutlineProject } from "react-icons/ai"
import { BiCategory, BiLogoBlogger, BiUserCircle } from "react-icons/bi"


export const Sidebar = () => {
    return (
        <div className='sidebar '
        >
            <div className="top">
                <Link to="/">
                    <h1>aelita</h1>
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
                    <Link to="/">
                        <li>
                            <AiOutlineUser className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
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
                    <li>
                        <AiOutlineProject className="icon" />
                        <span>Projects</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <MdNotifications className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <MdSettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <MdOutlinePsychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <MdSettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <BiUserCircle className="icon" />
                        <span>Profile</span>
                    </li>

                    <div className="bottom">
                        <button className="color-option" > </button>
                        <button className="color-option" > </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
