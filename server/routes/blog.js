import express from "express";
import { blogCount, createBlog, deleteBlog, getAllBlogs, getBlog, getEditorsPickBlogs, getPopularBlogs, updateBlog } from "../controllers/Blog.js"
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// GET ALL BLOGS
router.get("/", getAllBlogs)

// BLOG COUNT
router.get("/count", blogCount)

// GET BLOG
router.get("/blog", getBlog)

// GET POPULAR BLOGS
router.get('/popular', getPopularBlogs);

// GET EDITOR PICKS BLOGS
router.get('/editorpick', getEditorsPickBlogs);

// CREATE NEW BLOG
router.post("/", verifyToken, createBlog)

// DELETE BLOG
router.delete("/blog", deleteBlog)

// UPDATE BLOG
router.put("/blog", verifyUser, updateBlog)



export default router