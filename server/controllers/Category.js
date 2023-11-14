import { Category } from "../models/Category.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js"


// GET ALL CATEGORIES
export const getAllCategories = async (req, res, next) => {

    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);

    } catch (err) {
        next(err)
    }
}

// GET CATEGORY
export const getCategory = async (req, res, next) => {
    try {
        const { id } = req.query;

        const category = await Category.findOne({
            where: { id }
        });

        if (!category) {
            return next(createError(404, " Category is not defined"))
        }
        res.json(category);
    } catch (err) {
        next(err)
    }
}

// GET POPULAR CATEGORIES
export const getPopularCategories = async (req, res, next) => {
    try {
        const popularCategories = await Category.findAll({
            where: { popular: true },
        });

        res.status(200).json(popularCategories);
    } catch (error) {
        next(error);
    }
};

// CREATE NEW CATEGORY
export const createCategory = async (req, res, next) => {
    console.log("categoryInfo")
    // Yüklenecek dosyayı alın
    const imagePath = req.files && req.files.image;
    const { ...categoryInfo } = req.body;

    try {
        if (!imagePath) {
            return res.status(400).json({ message: 'Resim eksik veya hatalı.' });
        }
        const { data: imageData, error: imageError } = await storageClient
            .from('blog/categories')
            .upload(`${Date.now()}.png`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error('Dosya yükleme hatası:', imageError);
            return res.status(500).json({ message: 'Dosya yüklenirken bir hata oluştu.' });
        }

        const imageUrl = imageData.path;

        const newCategory = await Category.create({
            ...categoryInfo,
            image: imageUrl,
        });

        return res.status(201).json(newCategory);
    } catch (err) {
        next(err);
    }
};

// DELETE CATEGORY
export const deleteCategory = async (req, res, next) => {
    const { id } = req.query;

    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return next(createError(404, " Category is not defined"))

        }
        if (category) {
            await storageClient
                .from('blog')
                .remove([`categories/${category.image}`]);
        }

        await Category.destroy({
            where: {
                id: category.id
            }
        });

        return res.json({ message: 'Category has been deleted' });
    } catch (err) {
        next(err)
    }
}

// UPDATE CATEGORY
export const updateCategory = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;
    const { newImage } = req.files || {};

    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return next(createError(404, " Category is not defined"))
        }

        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('blog/categories')
                .upload(`${newImage?.name}-${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // Eski resmi silmek (varsa)
            if (category.image) {
                await storageClient
                    .from('blog')
                    .remove([`categories/${category.image}`]);
            }

            // category verisini güncelleyin
            category.image = newImageData.path;
        }
        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                category[field] = updatedFields[field];
            }
        });

        await category.save();

        return res.json({ category });
    } catch (err) {
        next(err)
    }
}