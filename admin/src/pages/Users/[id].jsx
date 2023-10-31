import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "./singleUser.scss"
import { useState } from "react"
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai"
import { Loading, UpdateUser } from "../../components"
import useFetch from "../../hooks/useFetch"

export const SingleUser = () => {
    const { id } = useParams()
    const { user } = useSelector(state => state.auth)

    const { data: auth, loading, error, reFetch } = useFetch(`${import.meta.env.VITE_REACT_BASE_URL}/api/users/user?id=${id}`)

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [selected, setSelected] = useState("Blogs")

    return (
        <>
            {
                loading ? <Loading /> : (error ? error : (
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
                                            user.isAdmin | user?.id == id && (
                                                <button
                                                    className="btn profile-edit-btn"
                                                    onClick={openModal}

                                                >
                                                    <span>
                                                        Edit Profile
                                                        <AiOutlineSetting />
                                                    </span>
                                                </button>
                                            )
                                        }

                                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                                    </div>

                                    <div className="profile-stats">

                                        <ul>
                                            <li onClick={() => setSelected("Blogs")}><span className="profile-stat-count" >{auth?.Blogs?.length}</span> Blog</li>
                                            <li onClick={() => setSelected("Projects")}><span className="profile-stat-count" >{auth?.Projects?.length}</span> Project</li>
                                            <li onClick={() => setSelected("Categories")}><span className="profile-stat-count" >{auth?.Categories?.length}</span> Categories</li>
                                        </ul>

                                    </div>

                                    <div className="profile-bio">

                                        <p><span className="profile-real-name">{auth.fullName}</span> 👨‍⚖️⚖️ </p>

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
                                        selected === "Blogs" ? auth?.Blogs && auth?.Blogs.map((blog, i) => (
                                            <div key={i} className="gallery-item" tabIndex="0">


                                                <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blog.image}`} className="gallery-image" alt="" />

                                                <div className="gallery-item-info">
                                                    <ul>
                                                        <li className="gallery-item-likes"><span className="visually-hidden">name:</span><i className="fas fa-heart" aria-hidden="true"></i> {blog?.title}</li>
                                                        {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                                                    </ul>
                                                </div>

                                            </div>
                                        )) : (
                                            selected === "Categories" ? auth?.Categories && auth?.Categories.map((category, i) => (
                                                <div key={i} className="gallery-item" tabIndex="0">


                                                    <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/categories/${category.image}`} className="gallery-image" alt="" />

                                                    <div className="gallery-item-info">
                                                        <ul>
                                                            <li className="gallery-item-likes"><span className="visually-hidden">name:</span><i className="fas fa-heart" aria-hidden="true"></i> {category?.name}</li>
                                                            {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                                                        </ul>
                                                    </div>

                                                </div>
                                            )) : (
                                                selected === "Projects" && auth?.Projects && auth?.Projects?.map((project, i) => (
                                                    <div key={i} className="gallery-item" tabIndex="0">
                                                        <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/projects/${project.image}`} className="gallery-image" alt="" />

                                                        <div className="gallery-item-info">
                                                            <ul>
                                                                <li className="gallery-item-likes"><span className="visually-hidden">name:</span><i className="fas fa-heart" aria-hidden="true"></i> {project?.title}</li>
                                                                {/* <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li> */}
                                                            </ul>
                                                        </div>

                                                    </div>
                                                ))
                                            )
                                        )
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
