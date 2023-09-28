import CopyToClipboard from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { MdContentPaste } from 'react-icons/md';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useSelector } from 'react-redux';
import "./code.scss"
export const Code = ({ children }) => {

    const darkMode = useSelector((state) => state.theme.dark);



    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [copied])


    return (
        <div className="code">
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                <button className="copyIcon">
                    {copied ? <MdContentPaste size={25} /> : <AiOutlineCopy size={25} />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language="javascript"
                style={darkMode ? materialDark : materialLight}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}
