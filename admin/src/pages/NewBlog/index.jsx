import { useState } from "react"
import "./newBlog.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useFetch from "@/hooks/useFetch"
import { MdDriveFolderUpload } from "react-icons/md"
import { toast } from "react-toastify"

export const NewBlog = () => {
    const { auth } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const { data } = useFetch(
        `categories?fields=id,name`
    );


    const [title, setTitle] = useState("")
    const [blog, setBlog] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [categoryIds, setCategoryIds] = useState([]);
    const [popular, setPopular] = useState(false)
    const [description, setDescription] = useState("")
    const [editorsPick, setEditorsPick] = useState(false);

    const handlePostBlog = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("blog", blog);
            formData.append("date", date);
            formData.append("image", image);
            formData.append("popular", popular);
            formData.append("categoryIds", categoryIds);
            formData.append("editorsPick", editorsPick);
            formData.append("description", description);
            formData.append("UserId", auth?.id);

            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}blogs`, formData, { withCredentials: true });

            navigate("/blogs")

            toast.success("blog created successful!", {
                position: "bottom-right"
            });
        } catch (err) {
            toast.error(err?.response?.data?.message, {
                position: "bottom-right",
            });
            console.log(err)
        }
    };

    const handleCategoryChange = (categoryId) => {
        if (categoryIds.includes(categoryId)) {
            setCategoryIds((prevCategories) => prevCategories.filter((id) => id !== categoryId));
        } else {
            setCategoryIds((prevCategories) => [...prevCategories, categoryId]);
        }
    };

    return (
        <div className="newBlog">
            <header className="top">
                <h1>  Create a new blog</h1>
            </header>
            <div className="bottom">
                <div className="left">
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="Uploaded" />
                    ) : (
                        <label htmlFor="imageInput" style={{ cursor: "pointer" }}>
                            <MdDriveFolderUpload size={35} />
                        </label>
                    )}
                </div>
                <div className="right">
                    <form onSubmit={handlePostBlog}>
                        {/* blog name */}
                        <div className="formInput">
                            <label> blog name:</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        {/* blog description */}
                        <div className="formInput">
                            <label> blog description:</label>
                            <textarea
                                type="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        {/* blog file */}
                        <div className="formInput">
                            <label htmlFor="file" style={{ cursor: "pointer" }}>
                                <MdDriveFolderUpload size={35} />
                            </label>
                            <div>
                                blog file
                            </div>
                            <input
                                type='file'
                                id='file'
                                name="file"
                                required
                                style={{ display: "none" }}
                                onChange={(e) => setBlog(e.target.files[0])}
                            />
                        </div>

                        {/* blog date */}
                        <div className="formInput">
                            <label >Date:</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />

                        </div>

                        {/* blog Image */}
                        <div className="formInput">
                            <label htmlFor="image" style={{ cursor: "pointer" }}>
                                <MdDriveFolderUpload size={35} />
                            </label>
                            <div>
                                blog image
                            </div>
                            <input
                                type='file'
                                id='image'
                                name="image"
                                placeholder="Upload an Image"
                                required
                                className="newBlog"
                                style={{ display: "none" }}

                                onChange={(e) => setImage(e.target.files[0])}

                            />
                        </div>

                        {/* popular */}
                        <div className="formInput">
                            <label>Popular:</label>
                            <select
                                value={popular}
                                onChange={(e) => setPopular(e.target.value === "true")}
                            >
                                <option value="false">false</option>
                                <option value="true">true</option>
                            </select>
                        </div>

                        {/* editors pick */}
                        <div className="formInput">
                            <label>Editors pick:</label>
                            <select
                                value={editorsPick ? "true" : "false"}
                                onChange={(e) => setEditorsPick(e.target.value === "true")}
                            >
                                <option value="false">false</option>
                                <option value="true">true</option>
                            </select>
                        </div>

                        {/* categories */}
                        <div className="formInput checkBox">
                            <label>Categories:</label>
                            {data &&
                                data.map((cat) => (
                                    <div key={cat.id}>
                                        <input
                                            type="checkbox"
                                            id={cat.name}
                                            value={cat.id}
                                            checked={categoryIds.includes(cat.id)}
                                            onChange={() => handleCategoryChange(cat.id)}
                                        />
                                        <label htmlFor={cat.name}>{cat.name}</label>
                                    </div>
                                ))}
                        </div>
                        <div className="formInput">
                            <button type="submit" className="sendBtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
