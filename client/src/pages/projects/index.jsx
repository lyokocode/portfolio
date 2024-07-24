import { Helmet } from "react-helmet";
import { ProjectList } from "@/components"
import "./projects.scss"

export const Projects = () => {
    return (
        <div className="projectsPage">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Projects</title>
                <meta name="description" content="Merhabalar, Ben Aelita. Kişisel blog sayfama hoş geldin. Bu sayfada yapmış olduğum projeleri göreceksin. Proje linki ve GitHub kodlarını inceleyebilirsiniz." />
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, CSS, Sass, TailwindCSS, Projeler, Yazılım, Geliştirme" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aelita.vercel.app/projects" />
                <link rel="icon" type="image/png" href="/logo.png" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "url": "https://aelita.vercel.app/projects",
                        "name": "Aelita || Projeler",
                        "description": "Merhabalar, Ben Aelita. Kişisel blog sayfama hoş geldin. Bu sayfada yapmış olduğum projeleri göreceksin. Proje linki ve GitHub kodlarını inceleyebilirsiniz.",
                        "itemListElement": []
                    })}
                </script>
            </Helmet>
            <h1 className="title">Projects</h1>
            <div className="content">
                <ProjectList />
            </div>
        </div>
    )
}
