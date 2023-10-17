import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import axios from "axios"
import "./login.scss"


export const Login = () => {

    const [view, setView] = useState(false)

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                userName,
                password,
            });
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="formWrapper">

            <form
                className="loginForm"
                onSubmit={handleLogin}
            >
                <div className="logo">
                    {"<Aelita />"}
                </div>
                <div className="formItem">
                    <input
                        type="text"
                        className="inputForm"
                        placeholder="user name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="formItem">
                    <input
                        type={view ? "text" : "password"}
                        className="inputForm"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
            </form>
        </div>
    )
}
