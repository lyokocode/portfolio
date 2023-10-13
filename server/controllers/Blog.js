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
        // Yüklenecek dosyayı alın
        const imagePath = req.files && req.files.image;
        const blogPath = req.files && req.files.blog;
        const { ...blogInfo } = req.body;


        if (!imagePath) {
            return res.status(400).json({ message: 'Resim eksik veya hatalı.' });
        }

        if (!blogPath) {
            return res.status(400).json({ message: 'Blog eksik veya hatalı.' });
        }

        const { data: imageData, error: imageError } = await storageClient
            .from('blog/images')
            .upload(`${Date.now()}.png`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });
        const { data: blogData, error: blogError } = await storageClient
            .from('blog/mdfiles')
            .upload(`${Date.now()}.md`, blogPath.data, {
                contentType: blogPath.mimetype,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error('Dosya yükleme hatası:', imageError);
            return res.status(500).json({ message: 'Dosya yüklenirken bir hata oluştu.' });
        }
        if (blogError) {
            console.error('md Dosya yükleme hatası:', imageError);
            return res.status(500).json({ message: 'md Dosya yüklenirken bir hata oluştu.' });
        }

        // Yükleme işlemi başarılıysa, dosyanın URL'sini alın
        const imageUrl = imageData.path;
        const blogUrl = blogData.path;

        // Blog verilerini ve dosyanın URL'sini kullanarak yeni blog oluşturun
        const newBlog = await Blog.create({
            ...blogInfo,
            image: imageUrl,
            blog: blogUrl
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