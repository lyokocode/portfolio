import useFetch from "@/hooks/useFetch";
import Markdown from "markdown-to-jsx"
import PropTypes from 'prop-types';
import { Code, Loading } from "@/components"
import "./markdownBlog.scss"


export const MarkdownBlog = ({ blog }) => {



    const { data: postContent, loading, error } = useFetch(`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/mdfiles/${blog}`)

    const overrides = {
        code: {
            component: Code,
        },
    };
    if (error) return error

    return (
        <article className="blogArticle">
            <div className="container">
                <div className="post-wrapper">
                    {loading ? <Loading /> : (
                        <Markdown options={{ overrides }}>
                            {postContent ? (postContent) : ("")}
                        </Markdown>
                    )}
                </div>
            </div>
        </article>
    )
}


MarkdownBlog.propTypes = {
    blog: PropTypes.string,
};