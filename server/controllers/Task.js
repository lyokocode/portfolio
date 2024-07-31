// controllers/Task.js
import { Task } from "../models/Task.js";
import { TaskCategory } from "../models/TaskCategory.js";
import { User } from "../models/User.js";
import { createError } from "../utils/error.js";

// Get all tasks
export const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.findAll({
            include: [
                {
                    model: TaskCategory,
                },
                {
                    model: User,
                }
            ]
        });

        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
};

// Get task by ID
export const getTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findOne({
            where: { id },
            include: [
                {
                    model: TaskCategory,
                    attributes: ['name'] // Yalnızca gerekli alanları dahil edin
                },
                {
                    model: User,
                    through: { attributes: [] } // İlişki tablosu alanlarını gizleyin
                }
            ]
        });

        if (!task) {
            return next(createError(404, "Task not defined"));
        }

        res.json(task);
    } catch (err) {
        next(err);
    }
};

// Create a new task and assign users
export const createTask = async (req, res, next) => {
    const { title, description, dueDate, completed, priority, categoryId, userIds } = req.body;

    try {
        // Görevi oluştur
        const newTask = await Task.create({
            title,
            description,
            completed,
            priority,
            categoryId,
            dueDate

        });

        // Kullanıcıları göreve ata
        if (userIds && userIds.length > 0) {
            await newTask.addUsers(userIds);
        }

        // Görev detaylarını ve ilişkili kullanıcıları al
        const taskWithUsers = await Task.findOne({
            where: { id: newTask.id },
            include: [
                {
                    model: User,
                    through: { attributes: [] } // Geçiş tablosu alanlarını gizle
                },
                {
                    model: TaskCategory,
                    attributes: ['name'] // Kategori adı
                }
            ]
        });

        return res.status(201).json(taskWithUsers);
    } catch (err) {
        next(err);
    }
};

// Delete a task
export const deleteTask = async (req, res, next) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);

        if (!task) return next(createError(404, 'Task not defined'));

        await Task.destroy({
            where: {
                id: task.id
            }
        });

        return res.json({ message: "Task has been deleted" });
    } catch (err) {
        next(err);
    }
};

// Update a task
export const updateTask = async (req, res, next) => {
    const { id } = req.params;
    const updatedFields = req.body;

    try {
        const task = await Task.findByPk(id);
        if (!task) return next(createError(404, "Task not defined"));

        // Update fields
        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                task[field] = updatedFields[field];
            }
        });

        await task.save();
        res.status(200).json({ message: "Task updated", task });

    } catch (err) {
        next(err);
    }
};

// Toggle task completion
export const toggleTaskCompletion = async (req, res, next) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);
        if (!task) return next(createError(404, "Task not defined"));

        // Toggle the completed status
        task.completed = !task.completed;

        await task.save();
        res.status(200).json({ message: "Task completion status toggled", task });
    } catch (err) {
        next(err);
    }
};