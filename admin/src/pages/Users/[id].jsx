import { useParams } from "react-router-dom"
import "./singleUser.scss"
import { useState } from "react"
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai"
import { Loading } from "@/components"
import { UpdateUser } from "@/modals/Update/UpdateUser"
import useFetch from "@/hooks/useFetch"

export const SingleUser = () => {
    const { id } = useParams()

    const { data: user, loading, error, reFetch } = useFetch(`users/user?id=${id}`)

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
                                        {user?.avatar ? (
                                            <img src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/user/${user?.avatar}`} alt="" />

                                        ) : (
                                            <AiOutlineUser />
                                        )}

                                    </div>

                                    <div className="profile-user-settings">
                                        {modalVisible && (
                                            <UpdateUser
                                                userData={user}
                                                onClose={closeModal}
                                                reFetch={reFetch}
                                            />
                                        )}
                                        <h1 className="profile-user-name">@{user.userName}</h1>

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
                                            <li onClick={() => setSelected("Blogs")}><span className="profile-stat-count" >{user?.Blogs?.length}</span> Blog</li>
                                            <li onClick={() => setSelected("Projects")}><span className="profile-stat-count" >{user?.Projects?.length}</span> Project</li>
                                            <li onClick={() => setSelected("Categories")}><span className="profile-stat-count" >{user?.Categories?.length}</span> Categories</li>
                                        </ul>

                                    </div>

                                    <div className="profile-bio">

                                        <p><span className="profile-real-name">{user.fullName}</span> 👨‍⚖️⚖️ </p>

                                    </div>

                                </div>

                            </div>
                        </header>

                        <main>
                            <div className="container">

                                <div className="gallery">
                                    {
                                        selected === "Blogs" ? user?.Blogs && user?.Blogs.map((blog, i) => (
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
                                            selected === "Categories" ? user?.Categories && user?.Categories.map((category, i) => (
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
                                                selected === "Projects" && user?.Projects && user?.Projects?.map((project, i) => (
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

                                {user?.Blogs > 20 && (
                                    <div className="loader"></div>
                                )}

                            </div>
                        </main>
                    </div>
                ))
            }
        </>
    )
}
