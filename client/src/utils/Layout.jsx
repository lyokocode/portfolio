import { Outlet } from "react-router-dom"
import { Footer, Menu, Navbar } from "../components"
import "../index.scss"
import { useSelector } from "react-redux";
const Layout = () => {

    const darkMode = useSelector((state) => state.theme.dark);
    return (
        <div className={darkMode ? "appContainer dark" : "appContainer light"}>
            <div className="responsive">
                <Navbar />
                <div className="wrapper">
                    <Outlet />
                    <Menu />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout