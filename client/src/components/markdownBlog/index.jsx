import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"
import { Code } from ".."

export const MarkdownBlog = ({ blog }) => {
    const [postContent, setPostContent] = useState("");
    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(`${blog}`); // Dosya yolunu projenize göre ayarlayın
                if (response.ok) {
                    const markdownText = await response.text();
                    setPostContent(markdownText);
                } else {
                    console.error('Failed to fetch Markdown content');
                }
            } catch (error) {
                console.error('Error fetching Markdown content:', error);
            }
        };

        fetchMarkdown();
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
