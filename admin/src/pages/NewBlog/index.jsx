import { useState } from "react"
import "./newBlog.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import useFetch from "../../../../client/src/hooks/useFetch"

export const NewBlog = () => {
    const { user } = useSelector(state => state.auth)

    const { data: cat, loading, error } = useFetch(
        `${import.meta.env.VITE_REACT_BASE_URL}/api/categories`
    );

    console.log(cat)

    const [title, setTitle] = useState("")
    const [blog, setBlog] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [popular, setPopular] = useState(false)
    const [description, setDescription] = useState("")
    const [editorsPick, setEditorsPick] = useState(false);
    const [categories, setCategories] = useState([]);

    function createSlug(title) {
        return title
            .toLowerCase() // Başlığı küçük harfe çevir
            .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
            .replace(/[^a-z0-9-]/g, '') // Alfanümerik olmayan karakterleri kaldır
            .replace(/-+/g, '-') // Ardışık tireleri tek bir tire ile değiştir
            .replace(/^-|-$/g, ''); // Baştaki ve sondaki tireleri kaldır
    }

    // Örnek kullanım
    const slug = createSlug(title);

    const handlePostBlog = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("slug", slug);
            formData.append("blog", blog);
            formData.append("date", date);
            formData.append("image", image);
            formData.append("popular", popular);
            formData.append("category", categories);
            formData.append("editorsPick", editorsPick);
            formData.append("description", description);
            formData.append("UserId", user?.id);

            const response = await axios.post("http://localhost:5000/api/blogs", formData);

            console.log("Blog gönderildi:", response.data);
        } catch (error) {
            console.error("Blog gönderirken hata oluştu:", error);
        }
    };
    return (
        <div className="newBlogPage">
            <header className="newBlogHeader">
                Create a new blog
            </header>

            <form className="newBlogForm">
                <div className="formController">
                    <label> blog name:</label>
                    <input
                        className="newBlog"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="formController">
                    <label> blog description:</label>
                    <textarea
                        className="newBlog"
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="formController">
                    <label> blog file:</label>
                    <input
                        type='file'
                        id='file'
                        name="file"
                        placeholder="Upload an Image"
                        required
                        className="newBlog"
                        onChange={(e) => setBlog(e.target.files[0])}
                    />
                </div>
                <div className="formController">
                    <label >Date:</label>
                    <input
                        type="date"
                        className="newBlog"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                </div>
                <div className="formController">
                    <label> blog image:</label>
                    <input
                        type='file'
                        id='file'
                        name="file"
                        placeholder="Upload an Image"
                        required
                        className="newBlog"
                        onChange={(e) => setImage(e.target.files[0])}

                    />
                </div>
                <div className="formController">
                    <label>Popular:</label>
                    <select
                        value={popular}
                        onChange={(e) => setPopular(e.target.value === "true")}
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>
                <div className="formController">
                    <label>Editors pick:</label>
                    <select
                        value={editorsPick ? "true" : "false"}
                        onChange={(e) => setEditorsPick(e.target.value === "true")}
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>
                <div className="formController">
                    <label>Categories:</label>
                    <select
                        multiple
                        value={categories}
                        onChange={(e) =>
                            setCategories(Array.from(e.target.selectedOptions, (option) => option.value))
                        }
                    >
                        {cat?.map((c) => (
                            <option key={c.id} value={c.name}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="post-btn" type="submit" onClick={handlePostBlog}>
                    post
                </button>
            </form>
        </div>
    )
}
