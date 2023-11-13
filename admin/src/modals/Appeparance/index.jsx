import { useAppearance } from "~/store/appearance/hooks"
import "./appeparance.scss"
import { MdVerified } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import { setBackgroundColor, setColor, setFontSize } from "~/store/appearance/actions"
import { colors, fontSizes } from "~/mockData/appearence"
import { useEffect, useRef, useState } from "react"

const Appeparance = ({ close }) => {
    const { backgroundColor, color, fontSize } = useAppearance()
    const [fontSizePercent, setFontSizePercent] = useState(0)

    useEffect(() => {
        setTimeout(() => setFontSizePercent(document.querySelector('.activeFontSize').offsetLeft + 3), 1)
    }, [fontSize])


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

    return (
        <div className="appeparance" ref={closeActionRef}>
            <h3 className="title">Customize Appearance</h3>
            <div className="desc">
                <p>These settings affect all Admin Panel in this browser.</p>
                <section className="profile">
                    <div className="profileWrapper">
                        <div className="logo">
                            <img src="/logo.png" alt="" />
                        </div>
                        <div className="post">
                            <header className="userInfo">
                                /Aelita
                                <MdVerified />
                                <div className="username">
                                    @aelita · 20d
                                </div>
                            </header>
                            <div className="postContent">
                                Hello User, Welcome to my admin panel
                                these settings affect all Admin Panel in this brownser
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fontSize">
                    <h6>Font Size</h6>
                    <div className="fontSizeContainer">
                        <p className="smaller">Aa</p>
                        <div className="settings">
                            <div
                                className="thin"
                                style={{ width: fontSizePercent }}
                            />
                            <div className="settingContent">
                                {fontSizes.map(fs => (
                                    <button
                                        className={`settingBtn ${fs == fontSize && "activeFontSize"}`}
                                        onClick={() => {
                                            setFontSize(fs)
                                        }}
                                        key={fs}
                                    >
                                        <div className={`ball ${fs == fontSize && "active"}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className="bigger">Aa</p>
                    </div>
                </section>

                <section className="color">
                    <h6>Color</h6>
                    <div className="colorContainer">
                        {colors.map((c, i) => (
                            <button
                                key={i}
                                style={{ backgroundColor: c.primary }}
                                className={`selectColor `}
                                onClick={() => {
                                    setColor(
                                        {
                                            ...color,
                                            ...c
                                        }
                                    )
                                }}
                            >
                                {
                                    color.primary == c.primary && (
                                        <TiTick size={25} />
                                    )
                                }
                            </button>
                        ))}
                    </div>
                </section>

                <section className="background">
                    <h6>Background</h6>
                    <div className="backgroundContainer">
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: '#0f1419',
                                    baseSecondary: '#536471'
                                })
                                setBackgroundColor({
                                    name: "light",
                                    primary: '#fff',
                                    secondary: '#f7f9f9',
                                    third: '#eff3f4',
                                    modal: '#00000066',
                                    globalModal: "#5b708366"

                                })
                            }}
                            className={`light ${backgroundColor.name == "light" && "active"}`}>
                            <div className="clickContainer">
                                <div className={`content ${backgroundColor.name == "light" && "active"}`}>
                                    <TiTick />

                                </div>
                            </div>
                            light
                        </button>
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: '#f7f9f9',
                                    baseSecondary: '#8b98a5'
                                })
                                setBackgroundColor({
                                    name: "normal",
                                    primary: '#15202b',
                                    secondary: '#1e2732',
                                    third: '#263340',
                                    modal: '#5b708366',
                                    globalModal: "#5b708366"

                                })
                            }}
                            className={`normal ${backgroundColor.name == "normal" && "active"}`}>
                            <div className="clickContainer">
                                <div className={`content ${backgroundColor.name == "normal" && "active"}`}>
                                    <TiTick />
                                </div>
                            </div>
                            normal
                        </button>
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: '#e7e9ea',
                                    baseSecondary: '#71767b'
                                })
                                setBackgroundColor({
                                    name: 'dark',
                                    primary: '#000',
                                    secondary: '#030712',
                                    third: '#111827',
                                    modal: '#090909',
                                    globalModal: "#5b708366"
                                })
                            }}
                            className={`dark ${backgroundColor.name == "dark" && "active"}`}>
                            <div className="clickContainer">
                                <div className={`content ${backgroundColor.name == "dark" && "active"}`}>
                                    <TiTick />
                                </div>
                            </div>
                            dark
                        </button>
                    </div>
                </section>
                <div className="submitBtn">
                    <button onClick={close}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Appeparance