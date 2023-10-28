import { Blog } from "../models/Blog.js";
import { User } from "../models/User.js";
import { Category } from "../models/Category.js";
import { storageClient } from "../database/supabase.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs"
import { Project } from "../models/Project.js";


// GET ALL USERS
export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.findAll({
            include: [

                Blog,
                Category,
                Project

            ],
        });

        res.status(200).json(users);

    } catch (err) {
        next(err)
    }
}

// DELETE USER
export const deleteUser = async (req, res, next) => {
    const { id } = req.query;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return next(createError(404, " User is not defined"))
        }
        if (user) {
            await storageClient
                .from('blog')
                .remove([`user/${user.avatar}`]);
        }

        await User.destroy({
            where: {
                id: user.id
            }
        });

        return res.json({ message: 'User has been deleted' });
    } catch (err) {
        next(err)
    }
}

// GET USER
export const getUser = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await User.findByPk(id, {
            include: [

                Blog,
                Category,
                Project

            ],
        });

        if (!user) {
            return next(createError(404, "User not defined"));
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
}


// UPDATE USER
export const updateUser = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;
    const { newImage } = req.files || {};

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return next(createError(404, "Kullanıcı bulunamadı"))
        }

        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('blog/user')
                .upload(`${newImage?.name}-${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // Eski resmi silmek (varsa)
            if (user.avatar) {
                await storageClient
                    .from('blog')
                    .remove([`user/${user.avatar}`]);
            }

            user.avatar = newImageData.path;
        }

        // Şifre güncellemesi: Eğer yeni bir şifre gönderildiyse
        if (updatedFields.password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(updatedFields.password, salt);
            user.password = hash;
        }

        // Diğer alanları güncelleme
        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id' && field !== 'password') {
                user[field] = updatedFields[field];
            }
        });

        await user.save();

        const { password, ...userInfo } = user.dataValues;

        return res.json({ user: userInfo });
    } catch (err) {
        next(err);
    }
}
