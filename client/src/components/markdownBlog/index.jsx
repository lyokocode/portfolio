import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import axios from "axios";
import PropTypes from 'prop-types';
import { Code } from ".."
import "./markdownBlog.scss"


export const MarkdownBlog = ({ blog }) => {

    const [postContent, setPostContent] = useState('');
    useEffect(() => {
        const fetchMarkdownFile = async () => {
            try {
                if (blog) {
                    const response = await axios.get(`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/mdfiles/${blog}`);
                    setPostContent(response.data);
                }
            } catch (error) {
                console.error('Dosya alınırken bir hata oluştu:', error);
            }
        };

        fetchMarkdownFile();
    }, [blog]);

    const overrides = {
        code: {
            component: Code,
        },
    };


    return (
        <article className="blogArticle">
            <div className="container">
                <div className="post-wrapper">
                    <Markdown options={{ overrides }}>
                        {blog ? (postContent) : ("")}
                    </Markdown>
                </div>
            </div>
        </article>
    )
}


MarkdownBlog.propTypes = {
    blog: PropTypes.string.isRequired,
};