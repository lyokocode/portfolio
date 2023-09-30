import { Blog } from "../models/Blog.js";
import { createError } from "../utils/error.js";

// GET ALL BLOGS
export const getAllBlogs = async (req, res, next) => {

    try {
        const blogs = await Blog.findAll()
        return res.status(200).json(blogs)
    } catch (err) {
        next(err)
    }
}
// GET Blog
export const getBlog = async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id)

        const blog = await Blog.findByPk(id);

        if (!blog) {
            return next(createError(404, " Blog is not defined"))
        }

        res.json(blog);
    } catch (err) {
        next(err)
    }
}

// CREATE NEW BLOG
export const createBlog = async (req, res, next) => {
    try {
        const newBlog = await Blog.create(req.body);
        return res.status(201).json(newBlog);
    } catch (err) {
        next(err)
    }
}

// DELETE BLOG
export const deleteBlog = async (req, res, next) => {
    const { id } = req.query;

    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return next(createError(404, " Blog is not defined"))

        }

        await Blog.destroy({
            where: {
                id: blog.id
            }
        });

        return res.json({ message: 'Blog has been deleted' });
    } catch (err) {
        next(err)
    }
}

