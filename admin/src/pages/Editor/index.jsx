import { useEffect, useState } from "react";
import "./editor.scss"
import Markdown from "markdown-to-jsx"
import { Code } from "../../components";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { saveAs } from 'file-saver';

export const Editor = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        const storedText = sessionStorage.getItem("editorText");
        if (storedText) {
            setText(storedText);
        }
    }, []);

    const handleTextChange = (newText) => {
        // Text değerini güncellemek
        setText(newText);

        // sessionStorage'e kaydetmek
        sessionStorage.setItem("editorText", newText);
    };


    const overrides = {
        code: {
            component: Code,
        },
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean'],
            ['image'],
            ['code'],
        ]
    };

    const downloadMarkdown = () => {
        const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
        saveAs(blob, 'markdown-dosya.md');
    };
    return (
        <div className="markdownPage">
            <div className="editor">
                <div className="reactQuil">
                    <ReactQuill
                        value={text}
                        onChange={handleTextChange}
                        modules={modules}
                        className="textarea"
                    />
                </div>
                <div className="view">
                    <Markdown options={{ overrides }}>
                        {text}
                    </Markdown>
                </div>
            </div>
            <button className="downdoadBtn" onClick={downloadMarkdown}>İndir</button>
        </div>
    );
};

