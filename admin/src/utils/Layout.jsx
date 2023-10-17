import { Navbar, Sidebar } from "../components"
import { Outlet } from "react-router-dom"

import "../index.scss"


const Layout = () => {
    return (
        <main className="app">
            <Sidebar />
            <section className="appContainer">
                <Navbar />
                <div className="appWrapper">
                    <Outlet />
                </div>
            </section>
        </main>
    )
}

export default Layout