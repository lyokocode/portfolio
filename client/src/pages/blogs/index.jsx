import { CardList } from "@/components"
import { Helmet } from "react-helmet";
import "./blog.scss"
export const Blogs = () => {
    return (
        <section className="blogPage">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Bloglar</title>
                <meta name="description" content="Aelita'nın blog sayfasında JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js ve daha fazlası hakkında makaleler bulun." />
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, CSS, Sass, TailwindCSS, Blog, Yazılım, Geliştirme" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aelita.vercel.app/blogs" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "url": "https://aelita.vercel.app/blogs",
                        "name": "Aelita || Bloglar",
                        "description": "Aelita'nın blog sayfasında JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js ve daha fazlası hakkında makaleler bulun.",
                        "author": {
                            "@type": "Person",
                            "name": "Aelita"
                        },
                        "blogPost": []
                    })}
                </script>
            </Helmet>
            <h1 className="title">Blogs</h1>
            <div className="content">
                <CardList />
            </div>
        </section>
    )
}
