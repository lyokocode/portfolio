import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "@/store/authSlice";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from 'react-toastify';
import usePost from "@/hooks/usePost";
import "./login.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


export const Login = () => {
    const [view, setView] = useState(false);

    const { auth } = useSelector(state => state.auth);
    const { postData } = usePost();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            // Post işlemini gerçekleştirin
            const response = await postData("auth/login", values, { withCredentials: true });
            dispatch(loginSuccess(response));

            if (auth && auth.isAdmin) {

                toast.success("login successful!", {
                    position: "bottom-right"
                });
                navigate("/")
            } else if (auth && !auth.isAdmin) {
                await postData(`auth/logout/${auth?.id}`, {}, { withCredentials: true });
                dispatch(logout())
                toast.error("Bu sayfaya sadece admin erişebilir", {
                    position: "bottom-right"
                });
            }

        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });
        }
    };


    useEffect(() => {
        if (auth && auth.isAdmin) {
            navigate("/")
        }
    }, [auth])

    return (
        <div className="formWrapper">
            <Formik
                initialValues={{
                    userName: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => {
                    return (
                        <Form className="loginForm" >
                            <div className="logo">
                                {"<Aelita />"}
                            </div>

                            <div className="formItem">
                                <Field name="userName" className="inputForm" placeholder="kullanıcı adı" />
                                <ErrorMessage name="userName" component="small" className="validation" />
                            </div>
                            <div className="formItem">
                                <Field name="password" type={!view ? "password" : "text"}
                                    className="inputForm"
                                    placeholder="Şifre" />


                                <div
                                    onClick={() => setView(!view)}
                                    className="passwordView"
                                    type="button"
                                >
                                    {view ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </div>
                                <ErrorMessage name="password" component="small" className="validation" />
                            </div>
                            <div className="formItem">
                                <button
                                    type="submit"
                                    className="loginBtn pull-right"
                                    value="Log In"
                                    disabled={!isValid || !dirty}
                                >
                                    Log In
                                </button>
                                <input />
                                <div className="clear-fix"></div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}