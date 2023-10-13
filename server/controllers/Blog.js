import { Blog } from "../models/Blog.js";
import { createError } from "../utils/error.js";
import { storageClient, supabase } from "../database/supabase.js"
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
        // Get the file to be uploaded
        const imagePath = req.files && req.files.image;
        const { ...blogData } = req.body;

        if (!imagePath) {
            return res.status(400).json({ message: 'File is missing or invalid.' });
        }

        // If resizing or processing of the file is required, it can be done here

        // Upload the file to Supabase Storage
        const { data, error } = await storageClient
            .from('blog/image')
            .upload(`${Date.now()}.md`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });

        if (error) {
            console.error('File upload error:', error);
            return res.status(500).json({ message: 'An error occurred while uploading the file.' });
        }

        // If the upload is successful, get the URL of the file
        const imageUrl = data.path;

        // Create a new blog using the blog data and the file URL
        const newBlog = await Blog.create({
            ...blogData,
            image: imageUrl
        });

        return res.status(201).json(newBlog);
    } catch (err) {
        next(err);
    }
};


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

// UPDATE Blog
export const updateBlog = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return next(createError(404, " Blog is not defined"))
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                blog[field] = updatedFields[field];
            }
        });

        await blog.save();

        return res.json({ blog });
    } catch (err) {
        next(err)
    }
}