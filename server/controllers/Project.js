import { Project } from "../models/Project.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js";

// GET ALL PROJECTS
export const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.findAll();
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

        const newProject = await Project.create({
            ...projectInfo,
            image: imageUrl,
        });

        return res.status(201).json(newProject);
    } catch (err) {
        next(err);
    }
}

// CREATE NEW PROJECT
export const deleteProject = async (req, res, next) => {
    const { id } = req.query;

    try {
        const project = await Project.findByPk(id);
        if (!project) {
            return next(createError(404, "Project not defined"));
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

    try {
        const project = await Project.findByPk(id);
        if (!project) {
            return next(createError(404, " Project is not defined"))
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                project[field] = updatedFields[field];
            }
        });

        await project.save();

        return res.json({ project });
    } catch (err) {
        next(err)
    }
}