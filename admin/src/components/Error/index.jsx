
import React, { useEffect, useState } from 'react';
import './error.scss';

export const Error = ({ error }) => {
    const [isVisible, setIsVisible] = useState(false);

    const displayDuration = 3000;

    useEffect(() => {
        if (error) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, displayDuration);
        }
    }, [error]);

    const clearError = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="error-container">
                <p className="error-message">{error}</p>
            </div>
        )
    );
};

