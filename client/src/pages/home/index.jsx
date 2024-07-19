import { Featured, Categories } from "@/components"
import "./home.scss"
import { Helmet } from "react-helmet"

export const Home = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Full Stack Developer</title>
                <meta name="description" content="Aelita - Full Stack Developer. JavaScript, React, NextJS ve daha fazlası hakkında bilgiler." />
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, CSS, Sass, TailwindCSS, İzmir, Yazılım, web geliştirme, web sitesi, web tasarım, web uygulaması, izmir web sitesi" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aelita.vercel.app" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://aelita.vercel.app",
                        "name": "Aelita || Full Stack Developer",
                        "description": "Aelita - Full Stack Developer. JavaScript, React, NextJS ve daha fazlası hakkında bilgiler.",
                        "author": {
                            "@type": "Person",
                            "name": "Aelita"
                        }
                    })}
                </script>
            </Helmet>
            <div className="homePage">
                <Featured />
                <Categories />
            </div>
        </>
    )
}
