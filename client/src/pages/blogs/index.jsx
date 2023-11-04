import { CardList } from "../../components"
import { Helmet } from "react-helmet";
import "./blog.scss"
export const Blogs = () => {
    return (
        <section className="blogPage">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Blogs</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <link rel="canonical" href="https://aelita.vercel.app/blogs" />
            </Helmet>
            <h1 className="title">Blogs</h1>
            <div className="content">
                <CardList />
            </div>
        </section>
    )
}
