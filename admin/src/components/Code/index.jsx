import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AiFillCopy } from "react-icons/ai"
import { BiPaste } from "react-icons/bi"
import "./code.scss"

export const Code = ({ children, language }) => {
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
                <button className='icon copy-icon'>
                    {copied ? <AiFillCopy size={18} /> : <BiPaste size={18} />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={materialDark}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

Code.propTypes = {
    children: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
};