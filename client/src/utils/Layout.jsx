import { Outlet } from "react-router-dom"
import { Footer, Menu, Navbar } from "../components"
import "../index.scss"
const Layout = () => {
    return (
        <div className="appContainer">
            <Navbar />
            <div className="wrapper">
                <Outlet />
                <Menu />
            </div>
            <Footer />
        </div>
    )
}

export default Layout