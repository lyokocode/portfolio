import express from "express";

import { createCategory, deleteCategory, getAllCategories, getCategory, getPopularCategories, updateCategory } from "../controllers/Category.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()


// GET ALL CATEGORIES
router.get("/", getAllCategories)

// GET CATEGORY
router.get("/category", getCategory)

// GET POPULAR CATEGORIES
router.get('/popular', getPopularCategories);

// CREATE NEW CATEGORY
router.post("/", verifyAdmin, createCategory)

// DELETE CATEGORY
router.delete("/category", verifyAdmin, deleteCategory)

// UPDATE CATEGORY
router.put("/category", verifyAdmin, updateCategory)


export default router
