import useFetch from "@/hooks/useFetch";
import { Link } from "react-router-dom"
import "./featured.scss"
import { Loading } from "@/components";

export const Featured = () => {

    const { data, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/editorpick?fields=id,title,description,image,slug`
    );


    return (
        <section className="featuredContainer">
            {/* featured title */}

            <h1 className="title"><b> Hey, Aelita here!</b> Discover my stories and creative ideas.</h1>

            {loading ? <Loading /> : (error ? "error" : (
                <>

                    {/* popular post */}
                    {
                        data && (
                            <div className="featuredPost">
                                <div className="imgContainer">
                                    {
                                        data && data[0]?.image && <img loading="lazy" className="image"
                                            src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${data[0]?.image}`}
                                            alt='popular blog image'
                                        />
                                    }
                                </div>
                                <div className="textContainer">
                                    <h2 className="postTitle">{data[0]?.title}</h2>
                                    <p className="postDesc">{data[0]?.description}</p>
                                    <Link to={`/blogs/${data[0]?.slug}`} className="postBtn">Read More </Link>
                                </div>
                            </div>
                        )
                    }
                </>
            ))}
        </section>
    )
}
