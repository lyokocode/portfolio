import React, { useEffect, useRef, useState } from 'react';
import "./systemHealt.scss";

const SystemHealth = ({ close }) => {
    const closeActionRef = useRef();

    const handleKeyPress = (event) => {
        if (event.keyCode === 27) { // 27 is the keyCode for the "Escape" key
            close();
            console.log(event.keyCode)
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closeActionRef.current && !closeActionRef.current.contains(event.target)) {
                close();
            }
        };

        const handleOutsideClick = (event) => {
            if (closeActionRef.current && !closeActionRef.current.contains(event.target)) {
                handleClickOutside(event);
            }
        };

        const handleKeyPressEvent = (event) => {
            handleKeyPress(event);
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyPressEvent);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyPressEvent);
        };
    }, [close]);


    const [status, setStatus] = useState(true)

    useEffect(() => {
        const events = ["online", "offline"]
        const eventHandle = () => {
            setStatus(navigator.online)
        }
        events.forEach(event => window.addEventListener(event, eventHandle))

        return () => {
            events.forEach(event => window.removeEventListener(event, eventHandle))
        }
    }, [status])
    console.log(status)
    return (
        <div className="systemHealt" ref={closeActionRef}>
            <h3 className="title">System Health</h3>
            internet durumu = {status ? "online" : "offline"}
        </div>
    );
};

export default SystemHealth;
