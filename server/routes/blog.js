import express from "express";

import { createBlog, getAllBlogs, getBlog } from "../controllers/Blog.js"

const router = express.Router()

// GET ALL BLOGS
router.get("/", getAllBlogs)

// GET BLOG
router.get("/blog", getBlog)

// CREATE NEW BLOG
router.post("/", createBlog)



export default router