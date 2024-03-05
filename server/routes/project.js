import express from "express";
import { createProject, deleteProject, getAllProjects, getProject, updateProject } from "../controllers/Project.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// GET ALL PROJECTS
router.get("/", getAllProjects);

// GET PROJECT
router.get("/project", getProject);

// CREATE NEW PROJECT
router.post("/", verifyToken, createProject);

// CREATE NEW PROJECT
router.delete("/project", verifyUser, deleteProject);

// CREATE NEW PROJECT
router.put("/project", verifyUser, updateProject);

export default router;