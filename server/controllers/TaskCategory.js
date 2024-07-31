import { TaskCategory } from "../models/TaskCategory.js"
import { createError } from "../utils/error.js"

// get all task categories
export const getAllCategories = async (req, res, next) => {
    try {

        const categories = await TaskCategory.findAll()

        res.status(200).json(categories)

    } catch (err) {
        next(err)
    }
}

// get task category
export const getCategory = async (req, res, next) => {

    try {
        const { id } = req.params;

        const category = await TaskCategory.findOne({
            where: { id },
        });

        if (!category) {
            return next(createError(404, "task category is not defined"))
        }

        res.json(category);
    } catch (err) {
        next(err)
    }
}

// create task category
export const createCategory = async (req, res, next) => {
    const { ...categoryInfo } = req.body;

    try {

        const newCategory = await TaskCategory.create({
            ...categoryInfo
        });

        return res.status(201).json(newCategory);
    } catch (err) {
        next(err);
    }
};

// delete task category
export const deleteCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const category = await TaskCategory.findByPk(id);

        if (!category) return next(createError(404, 'Category not defined'));

        await TaskCategory.destroy({
            where: {
                id: category.id
            }
        });

        return res.json({ message: "Task Category has been deleted" });
    } catch (err) {
        next(err);
    }
};

// Update category
export const updateCategory = async (req, res, next) => {
    const { id } = req.params;
    const updatedFields = req.body;

    try {
        const category = await TaskCategory.findByPk(id);
        if (!category) return next(createError(404, "Task Category is not defined"));

        // update other fields
        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                category[field] = updatedFields[field];
            }
        });

        await category.save();
        res.status(200).json({ message: "Task Category updated", category });

    } catch (err) {
        next(err);
    }
};