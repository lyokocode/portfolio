import "./newBlog.scss"

export const NewBlog = () => {
    return (
        <div className="newBlogPage">
            <header className="newBlogHeader">
                Create a new blog
            </header>

            <form className="newBlogForm">
                <div className="formController">
                    <label> blog name:</label>
                    <input type="text" className="newBlog" />
                </div>
                <div className="formController">
                    <label> blog file:</label>
                    <input type="file" className="newBlog" />
                </div>
                <div className="formController">
                    <label >Date:</label>
                    <input type="date" className="newBlog" placeholder="blog title" />

                </div>
                <div className="formController">
                    <label> blog image:</label>
                    <input type="file" className="newBlog" />
                </div>
                <div className="formController">
                    <label> popular:</label>
                    <select name="" id="">
                        <option value="">false</option>
                        <option value="">true</option>
                    </select>
                </div>
                <div className="formController">
                    <label> editors pick:</label>
                    <select name="" id="">
                        <option value="">false</option>
                        <option value="">true</option>
                    </select>
                </div>

            </form>
        </div>
    )
}
