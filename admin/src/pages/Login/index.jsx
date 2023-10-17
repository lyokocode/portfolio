import { useState } from "react"
import "./login.scss"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
export const Login = () => {

    const [view, setView] = useState(false)
    return (
        <>

            <div className="formWrapper">

                <div className="loginForm">
                    <div className="logo">
                        {"<Aelita />"}
                    </div>
                    <div className="formItem">
                        <input
                            type="email"
                            className="inputForm"
                            placeholder="e-mail"
                        />
                    </div>
                    <div className="formItem">
                        <input
                            type={view ? "text" : "password"}
                            className="inputForm"
                            placeholder="password"
                        />
                        <div
                            onClick={() => setView(!view)}
                            className="passwordView"
                        >
                            {view ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </div>
                    </div>
                    <div className="formItem">
                        <button
                            type="submit"
                            className="loginBtn pull-right"
                            value="Log In"
                        >
                            Log In
                        </button>
                        <input
                        />
                        <div className="clear-fix"></div>
                    </div>
                </div>
            </div>

        </>
    )
}
