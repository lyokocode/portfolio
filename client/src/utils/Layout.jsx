import { Outlet } from "react-router-dom"
import { Helmet } from "react-helmet";
import { Footer, Menu, Navbar } from "@/components"
import "@/index.scss"
import { useSelector } from "react-redux";

export const Layout = () => {

    const darkMode = useSelector((state) => state.theme.dark);
    return (
        <div className={darkMode ? "appContainer dark" : "appContainer light"}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Full Stack Developer</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <link rel="canonical" href="https://aelita.vercel.app/blogs" />
                <link rel="icon" type="image/svg+xml" href="/logo.png" />
            </Helmet>

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
