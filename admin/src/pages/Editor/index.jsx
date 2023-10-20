import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { saveAs } from 'file-saver';

export const Editor = () => {

    const [text, setText] = useState('');
    const [preview, setPreview] = useState(false);

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
        <div className="markdown-editor">
            <div className="editor">
                <ReactQuill
                    value={text}
                    onChange={setText}
                    modules={modules}
                />
            </div>
            <div className="preview">
                <button onClick={() => setPreview(!preview)}>
                    {preview ? 'Düzenle' : 'Önizle'}
                </button>

                {preview ? (
                    <div className="markdown-preview">
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                ) : null}
            </div>
            <button onClick={downloadMarkdown}>İndir</button>
        </div>
    )
}
