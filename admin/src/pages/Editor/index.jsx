import { useState } from "react"
import "./editor.scss"
import Markdown from "markdown-to-jsx"
import { saveAs } from 'file-saver';
import { useRef } from "react";

export const Editor = () => {
    const [input, setInput] = useState("");
    const textAreaRef = useRef(null);

    const insertText = (text) => {
        const startPos = textAreaRef.current.selectionStart;
        const endPos = textAreaRef.current.selectionEnd;

        const newText = input.substring(0, startPos) + text + input.substring(endPos);
        setInput(newText);

        textAreaRef.current.focus();
    };

    const downloadMarkdown = () => {
        const blob = new Blob([input], { type: 'text/markdown;charset=utf-8' });
        saveAs(blob, 'markdown-dosya.md');
    };
    const handleImageUpload = () => {
        const imageUrl = prompt("Lütfen resmin URL'sini girin:");
        if (imageUrl) {
            insertText(`![Resim Açıklaması](${imageUrl})`);
        }
    };

    return (
        <div className="markdownContainer">
            <div className="editor-header">
                <button onClick={() => insertText("# ")}>Ana Başlık</button>
                <button onClick={() => insertText("## ")}>Alt Başlık</button>
                <button onClick={() => insertText("### ")}>önemli </button>
                <button onClick={() => insertText("```\n\n```")}>kopyalanabilir içerik</button>
                <button onClick={() => insertText("")}>düz metin</button>
                <button onClick={handleImageUpload}>Resim Ekle</button>

            </div>
            <div className="markdown-editor">
                <textarea
                    className="textArea"
                    ref={textAreaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="markdown">
                    <Markdown>{input}</Markdown>
                </div>
            </div>
            <div className="buttonContainer">
                <button className="downloadBtn" onClick={downloadMarkdown}>
                    İndir
                </button>
            </div>
        </div>
    );
};

