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
                <meta name="description" content="Hoş geldiniz! Ben Aelita, PERN yığını projelerine odaklanan bir Full Stack Developer'ım. En son teknoloji trendleri, yazılım yenilikleri ve geliştirme ipuçları hakkında içerikleri keşfedin." />
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, CSS, Sass, TailwindCSS" />
                <meta name="author" content="Aelita" />
                <meta name="robots" content="index, follow" />
                <link rel="icon" type="image/svg+xml" href="/logo.png" />

                {/* Open Graph Meta Tags for Social Media */}
                <meta property="og:title" content="Aelita || Full Stack Developer" />
                <meta property="og:description" content="Hoş geldiniz! Ben Aelita, PERN yığını projelerine odaklanan bir Full Stack Developer'ım. En son teknoloji trendleri, yazılım yenilikleri ve geliştirme ipuçları hakkında içerikleri keşfedin." />
                <meta property="og:image" content="/path/to/your/image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aelita || Full Stack Developer" />
                <meta name="twitter:description" content="Hoş geldiniz! Ben Aelita, PERN yığını projelerine odaklanan bir Full Stack Developer'ım. En son teknoloji trendleri, yazılım yenilikleri ve geliştirme ipuçları hakkında içerikleri keşfedin." />
                <meta name="twitter:image" content="/path/to/your/image.jpg" />
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
