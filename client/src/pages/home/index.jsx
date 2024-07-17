import { Featured, Categories } from "@/components"
import "./home.scss"
import { Helmet } from "react-helmet"

export const Home = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Full Stack Developer</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <meta name="keywords" content="İzmir, Yazılım, web geliştirme, web sitesi, web tasarım, web uygulaması, izmir web sitesi" />
            </Helmet>
            <div className="homePage">
                <Featured />
                <Categories />
            </div>
        </>
    )
}
