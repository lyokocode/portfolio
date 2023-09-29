import express from "express";

import { getAllBlogs } from "../controllers/Blog.js"

const router = express.Router()

// GET ALL BLOGS
router.get("/", getAllBlogs)


export default router