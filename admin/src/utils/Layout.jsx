import { Navbar, Sidebar } from "../components"
import { Outlet } from "react-router-dom"

import "../index.scss"


const Layout = () => {
    return (
        <div className="app">
            <Sidebar />
            <section className="appContainer">
                <Navbar />
                <Outlet />
            </section>
        </div>
    )
}

export default Layout