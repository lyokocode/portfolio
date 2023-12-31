import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { Helmet } from "react-helmet";
import { AiOutlineFileImage, AiOutlineUser } from "react-icons/ai"
import { Loading, MarkdownBlog } from "../../components"
import "./singleBlog.scss"

export const SingleBlog = () => {

    const { slug } = useParams()
    const { data: blog, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?slug=${slug}`
    );

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{blog?.title}</title>
                <meta name="keywords" content="JavaScript, React, NextJS, PostgreSQL, Sequelize, Prisma, NodeJS, Express.js, Css, Sass, TailwindCss, " />
                <link rel="canonical" href="https://aelita.vercel.app/blogs" />
                <link rel="icon" type="image/svg+xml" href={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog?.image}`} />

            </Helmet>
            <section className="singleBlog">
                {loading ? <Loading /> : (error ? "error" : (
                    <>
                        {blog && (
                            <>
                                <h1 className="title">{blog?.title}</h1>
                                <div className="infoContainer">

                                    <div className="imageContainer">
                                        {
                                            blog?.image ? (<img
                                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog?.image}`}
                                                alt=""
                                                className="image"
                                            />) : (<AiOutlineFileImage />)
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
                                            <span className="username">{blog?.author}</span>
                                            <span className="date">{blog?.date}</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="content">
                                    <div className="post">
                                        <div className="desc">
                                            <MarkdownBlog blog={blog.blog} className="test" />
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
