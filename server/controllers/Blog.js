import { Blog } from "../models/Blog.js";

// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll()
        return res.status(200).json(blogs)
    } catch (err) {
        console.log(err)
    }
}

// CREATE NEW BLOG
export const createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        return res.status(201).json(newBlog);
    } catch (err) {
        console.log(err)
    }
}

// GET Blog
export const getBlog = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id)

        const blog = await Blog.findByPk(id);

        if (!blog) {
            return res.status(404).json({ error: 'Blog bulunamadı' });
        }

        res.json(blog);
    } catch (error) {
        console.error('Blog sorgulama hatası:', error);
        res.status(500).json({ error: 'Blog sorgulama hatası' });
    }
}
