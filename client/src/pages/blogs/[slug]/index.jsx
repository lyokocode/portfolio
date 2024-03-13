import { useParams } from "react-router-dom"
import useFetch from "@/hooks/useFetch"
import { Helmet } from "react-helmet";
import { AiOutlineUser } from "react-icons/ai"
import { Error, Loading } from "@/components"
import "./singleBlog.scss"
import moment from "moment";
import { Suspense, lazy } from "react";
const LazyMarkdownBlog = lazy(() => import('@/components').then(module => ({ default: module.MarkdownBlog })));

export const SingleBlog = () => {

    const { slug } = useParams()
    const { data: blog, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?slug=${slug}&fields=image,title,blog,createdAt`
    );
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{blog?.title}</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <link rel="canonical" href="https://aelita.vercel.app/blogs" />

            </Helmet>
            <section className="singleBlog">
                {loading ? <Loading /> : (error ? <Error /> : (
                    <>
                        {blog && (
                            <>
                                <h1 className="title">{blog?.title}</h1>
                                <div className="infoContainer">

                                    <div className="imageContainer">
                                        {
                                            blog?.image && (<img
                                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog?.image}`}
                                                alt=""
                                                className="image"
                                            />)
                                        }
                                    </div>
                                    <div className="user">
                                        <div className="userImageContainer">
                                            {
                                                blog?.User ? (
                                                    <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${blog?.User?.avatar}`} alt="" className="avatar" />
                                                ) : (
                                                    <AiOutlineUser />
                                                )
                                            }
                                        </div>
                                        <div className="userTextContainer">
                                            <span className="username">{blog?.User?.userName}</span>
                                            <span className="date">{moment(blog.createdAt).fromNow()}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="post">
                                        <div className="desc">
                                            <Suspense fallback={<h1>loading...</h1>}>
                                                <LazyMarkdownBlog blog={blog.blog} className="test" />
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                ))}
            </section>
        </>
    )
}
