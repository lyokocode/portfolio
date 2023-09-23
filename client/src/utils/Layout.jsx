import { Outlet } from "react-router-dom"
import { Footer, Menu, Navbar } from "../components"
import "../index.scss"
const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="container">
                <Outlet />
                <Menu />
            </div>
            <Footer />
        </div>
    )
}

export default Layout