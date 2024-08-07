import { Project } from "../models/Project.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js";

// GET ALL PROJECTS
export const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.findAll({
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
}

// GET PROJECT
export const getProject = async (req, res, next) => {
    try {
        const { id } = req.query;
        const project = await Project.findOne({
            where: { id }
        });

        if (!project) {
            return next(createError(404, "Project not defined"));
        }
        res.json(project);
    } catch (err) {
        next(err);
    }
}

// CREATE NEW PROJECT
export const createProject = async (req, res, next) => {

    const imagePath = req.files && req.files.image;
    const { ...projectInfo } = req.body;

    try {
        if (!imagePath) {
            return res.status(400).json({ message: 'Resim eksik veya hatalı.' });
        }
        const { data: imageData, error: imageError } = await storageClient
            .from('blog/projects')
            .upload(`${Date.now()}.png`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error('Dosya yükleme hatası:', imageError);
            return res.status(500).json({ message: 'Dosya yüklenirken bir hata oluştu.' });
        }

        const imageUrl = imageData.path;

        const categories = projectInfo.categories.split(',').map((category) => category.trim());

        const newProject = await Project.create({
            ...projectInfo,
            categories,
            image: imageUrl,
        });

        return res.status(201).json(newProject);
    } catch (err) {
        next(err);
    }
}

// DELETE  PROJECT
export const deleteProject = async (req, res, next) => {
    const { id } = req.query;

    try {
        const project = await Project.findByPk(id);
        if (!project) {
            return next(createError(404, "Project not defined"));
        }

        if (project) {
            await storageClient
                .from('blog')
                .remove([`projects/${project.image}`]);
        }

        await Project.destroy({
            where: {
                id: project.id
            }
        });

        return res.json({ message: 'Project has been deleted' });
    } catch (err) {
        next(err);
    }
}

// UPDATE PROJECT
export const updateProject = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;
    const { newImage } = req.files || {};

    try {
        const project = await Project.findByPk(id);
        if (!project) {
            return next(createError(404, "Project is not defined"));
        }

        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('blog/projects')
                .upload(`${newImage?.name}-${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // Eski resmi silmek (varsa)
            if (project.image) {
                await storageClient
                    .from('blog')
                    .remove([`projects/${project.image}`]);
            }

            // Yeni resmi kaydet
            project.image = newImageData.path;
        }

        if (updatedFields.categories) {
            project.categories = updatedFields.categories.split(',').map((category) => category.trim());
        }


        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id' && field !== 'categories') {
                project[field] = updatedFields[field];
            }
        });

        await project.save();

        return res.json({ project });
    } catch (err) {
        next(err);
    }
}
