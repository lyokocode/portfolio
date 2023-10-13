import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import { Code } from ".."
import axios from "axios";

export const MarkdownBlog = ({ blog }) => {

    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        const fetchMarkdownFile = async () => {
            try {
                const response = await axios.get(`https://bizdptqtvsjekgsblenm.supabase.co/storage/v1/object/public/blog/mdfiles/${blog}`);
                setPostContent(response.data); // Dosya içeriğini alın ve duruma kaydedin
            } catch (error) {
                console.error('Dosya alınırken bir hata oluştu:', error);
            }
        };

        fetchMarkdownFile();
    }, []);
    const overrides = {
        code: {
            component: Code,
        },
    };


    return (
        <article className="article">
            <div className="container">
                <div className="post-wrapper">
                    <Markdown options={{ overrides }}>
                        {postContent}
                    </Markdown>
                </div>
            </div>
        </article>
    )
}
