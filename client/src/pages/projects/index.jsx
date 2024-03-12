import { Helmet } from "react-helmet";
import { ProjectList } from "@/components"
import "./projects.scss"

export const Projects = () => {
    return (
        <div className="projectsPage">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Projects</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <link rel="canonical" href="https://aelita.vercel.app/blogs" />
                <link rel="icon" type="image/svg+xml" href="/logo.png" />
            </Helmet>
            <h1 className="title">Projects</h1>
            <div className="content">
                <ProjectList />
            </div>
        </div>
    )
}
