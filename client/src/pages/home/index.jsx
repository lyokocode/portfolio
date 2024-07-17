import { Featured, Categories } from "@/components"
import "./home.scss"
import { Helmet } from "react-helmet"
import { useEffect } from "react";
import { useState } from "react";
import fetchSitemap from "@/hooks/useSitemap";
import axios from "axios";

export const Home = () => {
    useEffect(() => {
        const updateSitemap = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/sitemap');
                console.log(response.data); // Başarılı yanıtı logla
                await fetchSitemap(); // fetchSitemap fonksiyonunu çağırarak sitemap'i güncelle
            } catch (error) {
                console.error('Sitemap güncelleme hatası:', error.message);
            }
        };

        updateSitemap();
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aelita || Full Stack Developer</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <meta name="keywords" content="İzmir, Yazılım, web geliştirme, web sitesi, web tasarım, web uygulaması, izmir web sitesi" />
            </Helmet>
            {/* <div className="homePage">
                <Featured />
                <Categories />
            </div> */}
            <div>
                <h2>Sitemap Güncelleme İşlemi</h2>
                {/* Sitemap güncelleme işlemi burada gösterilebilir */}
            </div>
        </>
    )
}
