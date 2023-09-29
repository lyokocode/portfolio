import { Blog } from "../models/Blog.js";

// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll()
        if (!blogs) return res.status(404).json({ message: "blog not found" })
        return res.status(200).json(blogs)
    } catch (error) {
        console.log(err)
    }
}