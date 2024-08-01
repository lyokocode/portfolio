import express from "express"
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/TaskCategory.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()


// get all categories
router.get("/", getAllCategories)

// get category by id
router.get("/:id", getCategory);

// create a new category
router.post("/", createCategory)

// delete category
router.delete("/:id", deleteCategory);

// update category
router.put("/:id", updateCategory);


export default router