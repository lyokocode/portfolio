import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom"
import "./featured.scss"

export const Featured = () => {

    const { data, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/editorpick`
    );

    if (loading) {
        return "loading"
    } else if (error) {
        return "there is a problem"
    } else {
        return (
            <section className="featuredContainer">
                {/* featured title */}
                <h1 className="title"><b> Hey, Aelita here!</b> Discover my stories and creative ideas.</h1>

                {/* popular post */}
                {
                    data ? (
                        <div className="post">
                            <div className="imgContainer">
                                {
                                    data[0]?.image && <img className="image"
                                        src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${data[0]?.image}`}
                                        alt='popular blog image'
                                    />
                                }
                            </div>
                            <div className="textContainer">
                                <h2 className="postTitle">{data[0]?.title}</h2>
                                <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, repellat eos. Aspernatur culpa aut dolorum accusantium ex dignissimos voluptatum provident.</p>
                                <Link to={`/blogs/${data[0]?.id}`} className="postBtn">Read More </Link>
                            </div>
                        </div>
                    ) : ("data is not defined")
                }
            </section>
        )
    }
}
