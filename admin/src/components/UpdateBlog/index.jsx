import { useState } from "react"
import "./updateBlog.scss"
import axios from "axios"
import { AiOutlineClose } from "react-icons/ai";

export const UpdateBlog = ({ onClose, blogData, reFetch }) => {
    console.log(blogData)

    const [errorMessage, setErrorMessage] = useState()
    const [error, serError] = useState(null)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null,
        blog: null,
        slug: "",
        category: "",
        date: "",
        popular: blogData?.popular || false,
        editorsPick: blogData?.editorsPick || false,
        // Diğer özellikler
    });


    const handleUpdateBlog = async (e) => {
        e.preventDefault();

        // Güncellenmiş verileri depolamak için yeni bir FormData oluşturun
        const updatedData = new FormData();

        // description özelliğini kontrol edin ve güncelleme verilerine ekleyin
        if (formData.description) {
            updatedData.append("description", formData.description);
        }

        // Diğer özellikleri kontrol edin ve güncelleme verilerine ekleyin
        if (formData.title) {
            updatedData.append("title", formData.title);
        }
        if (formData.slug) {
            updatedData.append("slug", formData.slug);
        }
        if (formData.image) {
            updatedData.append("newImage", formData.image);
        }
        if (formData.blog) {
            updatedData.append("newBlog", formData.blog);
        }
        if (formData.category) {
            updatedData.append("category", formData.category);
        }
        if (formData.date) {
            updatedData.append("date", formData.date);
        }
        if (formData.popular) {
            updatedData.append("popular", formData.popular);
        }
        if (formData.editorsPick) {
            updatedData.append("editorsPick", formData.editorsPick);
        }

        try {
            const response = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}/api/blogs/blog?id=${blogData?.id}`, updatedData);

            console.log("Blog güncellendi:", response.data);
            reFetch()
            onClose(); // Güncelleme işlemi tamamlandığında bileşeni kapat
            return response.data;
        } catch (error) {
            console.error("Blog güncelleme sırasında hata oluştu:", error);
            throw error;
        }

    };

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
            .replace(/[^a-z0-9-]/g, '') // Alfanümerik olmayan karakterleri kaldır
            .replace(/-+/g, '-') // Ardışık tireleri tek bir tire ile değiştir
            .replace(/^-|-$/g, ''); // Baştaki ve sondaki tireleri kaldır
    };
    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        const newSlug = createSlug(newTitle);
        setFormData({ ...formData, title: newTitle, slug: newSlug });
    };

    return (
        <div className="updateBlog">
            {/* close button */}
            <button
                onClick={onClose}
                className="closeBtn"
            >
                <AiOutlineClose size={25} />
            </button>

            {/* page header */}
            <header className="updateBlogHeader">
                Update Blog
            </header>

            <form className="updateBlogForm" onSubmit={handleUpdateBlog}>
                {/* blog file */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">Blog File:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newBlog"
                            onChange={(e) => setFormData({ ...formData, blog: e.target.files[0] })}
                        />
                        <div className="updateBlogImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blogData?.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* blog name */}
                <div className="formController">
                    <label> blog name:</label>
                    <input
                        className="newBlog"
                        type="text"
                        placeholder={blogData?.title}
                        value={formData.title}
                        onChange={handleTitleChange}
                    />
                </div>

                {/* slug */}
                <div className="formController">
                    <label>Slug:</label>
                    <input
                        className="newBlog"
                        type="text"
                        value={formData.slug}
                        disabled
                    />
                </div>

                {/* blog description */}
                <div className="formController">
                    <label> description:</label>
                    <textarea
                        className="newBlog"
                        type="text"
                        placeholder={blogData?.description}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                {/* blog Image */}
                <div className="formController">
                    <div className="imageController">
                        <label htmlFor="file">Blog image:</label>
                        <input
                            type='file'
                            id='file'
                            name="file"
                            className="newBlog"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                        <div className="updateBlogImage">
                            <img
                                src={`${import.meta.env.VITE_REACT_SUPABASE_STORAGE}/object/public/blog/images/${blogData?.image}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* blog date */}
                <div className="formController">
                    <label >Date:</label>
                    <input
                        type="date"
                        className="newBlog"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />

                </div>
                {/* popular */}
                <div className="formController">
                    <label>Popular:</label>
                    <select
                        value={formData.popular}
                        onChange={(e) => setFormData({ ...formData, popular: e.target.value })}
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>
                {/* editors pick */}
                <div className="formController">
                    <label>Editor's Pick:</label>
                    <select
                        value={formData.editorsPick}
                        onChange={(e) => setFormData({ ...formData, editorsPick: e.target.value })}
                    >
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>

                <button className="post-btn" type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}
