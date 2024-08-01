import express from "express"
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/TaskCategory.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()


// get all categories
router.get("/", verifyAdmin, getAllCategories)

// get category by id
router.get("/:id", verifyAdmin, getCategory);

// create a new category
router.post("/", verifyAdmin, createCategory)

// delete category
router.delete("/:id", verifyAdmin, deleteCategory);

// update category
router.put("/:id", verifyAdmin, updateCategory);


export default router