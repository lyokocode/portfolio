import express from "express";

import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/Blog.js"

const router = express.Router()

// GET ALL BLOGS
router.get("/", getAllBlogs)

// GET BLOG
router.get("/blog", getBlog)

// CREATE NEW BLOG
router.post("/", createBlog)

// DELETE BLOG
router.delete("/blog", deleteBlog)

// DELETE BLOG
router.put("/blog", updateBlog)



export default router