import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

export const NotFound = () => {

    useEffect(() => {
        var str = document.getElementsByTagName('div')[0].innerHTML.toString();
        var i = 0;
        document.getElementsByTagName('div')[0].innerHTML = "";

        setTimeout(function () {
            var se = setInterval(function () {
                i++;
                document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
                if (i == str.length) {
                    clearInterval(se);
                    document.getElementsByTagName('div')[0].innerHTML = str;
                }
            }, 10);
        }, 0);

    }, [])

    return (
        <main className="notFound">
            <section className="notFoundBody">
                <h1 className="statusCode">404</h1>
                <div className="codeContainer" >
                    <p> <span>ERROR CODE</span>: "<i>HTTP 404 Not Found</i>"</p>
                    <p>{">"} <span>ERROR DESCRIPTION</span>: "<i>The page you are looking for could not be found on this server</i>"</p>
                    <p>{">"} <span>ERROR POSSIBLY CAUSED BY</span>: [<b>Page removed, renamed, or never existed, incorrect URL, broken link</b>...]</p>
                    <p>{">"} <span>SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS</span>: [<Link to="/">Home Page</Link>, <Link to="/blogs">Blogs</Link>, <Link to="/projects">Projects</Link>...]</p>
                    <p>{">"} <span>HAVE A NICE DAY :-)</span></p>
                </div>
                <a className="avatar" href="https://github.com/lyokocode" title="aelita">
                    <img src="/logo.png" alt="Avatar" />
                </a>
            </section>
        </main>
    );
};

