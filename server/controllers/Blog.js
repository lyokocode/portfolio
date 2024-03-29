import { Blog } from "../models/Blog.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js"
import { User } from "../models/User.js";
import { Category } from "../models/Category.js";
import { Op } from 'sequelize'
// GET ALL BLOGS
export const getAllBlogs = async (req, res, next) => {

    const { categoryIds, page, pageSize, searchQuery } = req.query

    const offset = (page - 1) * pageSize;

    const selectedFields = req.query.fields ? req.query.fields.split(',') : null;

    try {
        let blogs;

        const whereClause = searchQuery ? { // Eğer searchQuery mevcutsa where koşulunu oluştur
            [Op.or]: [
                { title: { [Op.iLike]: `%${searchQuery}%` } },
                { description: { [Op.iLike]: `%${searchQuery}%` } }
            ]
        } : {};

        if (categoryIds) {
            const categoryIdsArray = categoryIds.split(',').map(id => parseInt(id.trim()));
            blogs = await Blog.findAll({
                attributes: selectedFields,
                include: [
                    {
                        model: User,
                        attributes: ['userName', 'avatar'],
                    },
                    {
                        model: Category,
                        attributes: ['name', 'id'],
                        where: { id: categoryIdsArray }
                    },
                ],
                where: whereClause, // Oluşturulan where koşulunu kullan
                order: [['createdAt', 'DESC']],
                offset,
                limit: pageSize,
            });
        } else {
            blogs = await Blog.findAll({
                attributes: selectedFields,
                include: [
                    {
                        model: User,
                        attributes: ['userName', 'avatar'],
                    },
                    {
                        model: Category,
                        attributes: ['name', 'id'],
                    },
                ],
                where: whereClause, // Oluşturulan where koşulunu kullan
                order: [['createdAt', 'DESC']],
                offset,
                limit: pageSize,
            });
        }

        res.status(200).json(blogs);
    } catch (err) {
        next(err)
    }
}


// BLOG COUNT
export const blogCount = async (req, res, next) => {

    try {
        const blogs = await Blog.count()

        res.status(200).json(blogs)
    } catch (err) {
        next(err)
    }
}
// GET Blog
export const getBlog = async (req, res, next) => {
    const selectedFields = req.query.fields ? req.query.fields.split(',') : null;

    try {
        const { slug } = req.query;

        const blog = await Blog.findOne({
            where: { slug },
            attributes: selectedFields,
            include: [
                {
                    model: User,
                    attributes: ['userName', 'avatar'],
                },
                {
                    model: Category, // Category modelini ekledik
                    attributes: ['name', 'id'], // Sadece kategori ismini almak için
                },
            ],

        });

        if (!blog) {
            return next(createError(404, " Blog is not defined"))
        }

        res.json(blog);
    } catch (err) {
        next(err)
    }
}

// GET POPULAR BLOGS
export const getPopularBlogs = async (req, res, next) => {
    const selectedFields = req.query.fields ? req.query.fields.split(',') : null;

    try {
        const popularBlogs = await Blog.findAll({
            where: { popular: true },
            attributes: selectedFields,
            include: [
                {
                    model: User,
                    attributes: ['userName', 'avatar'],
                },
                {
                    model: Category,
                    attributes: ['name', "color", 'id'],
                },

            ],
            order: [['createdAt', 'DESC']]

        });

        res.status(200).json(popularBlogs);
    } catch (error) {
        next(error);
    }
};
// GET EDITOR PICKS BLOGS
export const getEditorsPickBlogs = async (req, res, next) => {
    const selectedFields = req.query.fields ? req.query.fields.split(',') : null;

    try {
        const editorsPickBlogs = await Blog.findAll({
            where: { editorsPick: true },
            attributes: selectedFields,
            include: [
                {
                    model: User,
                    attributes: ['userName', 'avatar'],
                },
                {
                    model: Category,
                    attributes: ['name', "color", 'id'],
                },
            ],
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json(editorsPickBlogs);
    } catch (error) {
        next(error);
    }
};

// CREATE NEW BLOG
export const createBlog = async (req, res, next) => {
    // Yüklenecek dosyayı alın
    const imagePath = req.files && req.files.image;
    const blogPath = req.files && req.files.blog;
    const { categoryIds, ...blogInfo } = req.body;

    try {
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

        const categoryIdsArray = categoryIds.split(',').map(id => parseInt(id.trim()));

        // Kategorileri al ve bloga ekle
        if (categoryIdsArray && categoryIdsArray.length > 0) {
            const categories = await Category.findAll({
                where: { id: categoryIdsArray }
            });
            await newBlog.setCategories(categories);
        }
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
        if (blog) {
            await storageClient
                .from('blog')
                .remove([`images/${blog.image}`]);
        }

        if (blog) {
            await storageClient
                .from('blog')
                .remove([`mdfiles/${blog.blog}`]);
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

// UPDATE BLOG
export const updateBlog = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    const { newImage, newBlog } = req.files || {};

    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return next(createError(404, "Blog is not defined"));
        }

        // update image
        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('blog/images')
                .upload(`${newImage?.name}-${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // Eski resmi silmek (varsa)
            if (blog.image) {
                await storageClient
                    .from('blog')
                    .remove([`images/${blog.image}`]);
            }

            // Blog verisini güncelleyin
            blog.image = newImageData.path;
        }
        // update blog
        if (newBlog) {
            const { data: newBlogData, error: newBlogError } = await storageClient
                .from('blog/mdfiles')
                .upload(`${Date.now()}.md`, newBlog.data, {
                    contentType: newBlog.mimetype,
                    cacheControl: '3600',
                });

            if (newBlogError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // Eski resmi silmek (varsa)
            if (blog.blog) {
                await storageClient
                    .from('blog')
                    .remove([`mdfiles/${blog.blog}`]);
            }

            // Blog verisini güncelleyin
            blog.blog = newBlogData.path;
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                blog[field] = updatedFields[field];
            }
        });

        await blog.save();

        return res.json({ blog });
    } catch (err) {
        next(err);
    }
}
