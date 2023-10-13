import express from "express";

import { createBlog, deleteBlog, getAllBlogs, getBlog, getEditorsPickBlogs, getPopularBlogs, updateBlog } from "../controllers/Blog.js"

const router = express.Router()

// GET ALL BLOGS
router.get("/", getAllBlogs)

// GET BLOG
router.get("/blog", getBlog)

// GET POPULAR BLOGS
router.get('/popular', getPopularBlogs);

// GET EDITOR PICKS BLOGS
router.get('/editorpick', getEditorsPickBlogs);

// CREATE NEW BLOG
router.post("/", createBlog)

// DELETE BLOG
router.delete("/blog", deleteBlog)

// UPDATE BLOG
router.put("/blog", updateBlog)



export default router