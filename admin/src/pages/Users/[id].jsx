import { useParams, Link, useNavigate } from "react-router-dom"
import useFetch from "../../../../client/src/hooks/useFetch"
import { useSelector } from "react-redux"
import "./singleUser.scss"
import { useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { UpdateUser } from "../../components"

export const SingleUser = () => {
    const { id } = useParams()
    const { user } = useSelector(state => state.auth)
    console.log(user)

    const { data: auth, loading, error, reFetch } = useFetch(`http://localhost:5000/api/users/user?id=${id}`)
    console.log(auth)


    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            {
                loading ? "loading" : (error ? error : (
                    <div className="singleUser">
                        <header>
                            <div className="container">

                                <div className="profile">

                                    <div className="profile-image">
                                        {auth?.avatar ? (
                                            <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${auth?.avatar}`} alt="" />

                                        ) : (
                                            <AiOutlineUser />
                                        )}

                                    </div>

                                    <div className="profile-user-settings">
                                        {modalVisible && (
                                            <UpdateUser
                                                userData={auth}
                                                onClose={closeModal}
                                                reFetch={reFetch}
                                            />
                                        )}
                                        <h1 className="profile-user-name">@{auth.userName}</h1>

                                        {
                                            user?.id == id && (
                                                <button
                                                    className="btn profile-edit-btn"
                                                    onClick={openModal}

                                                >
                                                    Edit Profile
                                                </button>
                                            )
                                        }

                                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                                    </div>

                                    <div className="profile-stats">

                                        <ul>
                                            <li><span className="profile-stat-count">{auth?.Blogs?.length}</span> Blog</li>
                                            <li><span className="profile-stat-count">188</span> followers</li>
                                            <li><span className="profile-stat-count">206</span> following</li>
                                        </ul>

                                    </div>

                                    <div className="profile-bio">

                                        <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

                                    </div>

                                </div>
                                {/* <!-- End of profile section --> */}

                            </div>
                            {/* <!-- End of container --> */}

                        </header>

                        <main>
                            <div className="container">

                                <div className="gallery">

                                    {
                                        auth?.Blogs && auth?.Blogs.map((blog, i) => (
                                            <div key={i} className="gallery-item" tabIndex="0">


                                                <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog.image}`} className="gallery-image" alt="" />

                                                <div className="gallery-item-info">
                                                    <ul>
                                                        <li className="gallery-item-likes"><span className="visually-hidden">name:</span><i className="fas fa-heart" aria-hidden="true"></i> {blog?.title}</li>
                                                        {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                                                    </ul>
                                                </div>

                                            </div>
                                        ))
                                    }



                                </div>
                                {/* <!-- End of gallery --> */}

                                {auth?.Blogs > 20 && (
                                    <div className="loader"></div>
                                )}

                            </div>
                            {/* <!-- End of container --> */}

                        </main>
                    </div>
                ))
            }
        </>
    )
}
