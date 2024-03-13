import React, { useEffect, useState } from 'react';
import './error.scss'
export const Error = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`container ${loading ? "loading" : ""}`}>
            <h1 className="title">500</h1>
            <h2 className="subtitle">
                Something went wrong <b>:(</b>
            </h2>
            <div className="gears">
                <div className="gear one">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="gear two">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="gear three">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    )
}
