import express from "express";
import { createProject, deleteProject, getAllProjects, getProject, updateProject } from "../controllers/Project.js";

const router = express.Router();

// GET ALL PROJECTS
router.get("/", getAllProjects);

// GET PROJECT
router.get("/project", getProject);

// CREATE NEW PROJECT
router.post("/", createProject);

// CREATE NEW PROJECT
router.delete("/project", deleteProject);

// CREATE NEW PROJECT
router.put("/project", updateProject);

export default router;