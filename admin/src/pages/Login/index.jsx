import { useEffect, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import axios from "axios"
import "./login.scss"
import { useDispatch, useSelector } from "react-redux"
import { loginFailure, loginSuccess } from "../../store/authSlice"
import { useNavigate } from "react-router-dom"


export const Login = () => {

    const [view, setView] = useState(false)

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { user, error } = useSelector(state => state.auth)
    const [showError, setShowError] = useState(false);

    // error message duration time
    const errorDisplayDuration = 3000;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/api/auth/login`, {
                userName,
                password,
            });
            dispatch(loginSuccess(response.data));

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Giriş sırasında bir hata oluştu';
            dispatch(loginFailure(errorMessage));
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
            }, errorDisplayDuration);
        }
    };
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])

    useEffect(() => {
        if (showError) {
            // Hata mesajını görüntüle
            setTimeout(() => {
                setShowError(false);
            }, errorDisplayDuration);
        }
    }, [showError]);


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
                {showError && (
                    <div className="errorMessage">
                        {error}
                    </div>
                )}
            </form>
        </div>
    )
}
