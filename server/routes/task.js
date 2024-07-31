import express from "express"
import { createTask, deleteTask, getAllTasks, getTask, toggleTaskCompletion, updateTask } from "../controllers/Task.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()


// get all tasks
router.get("/", verifyAdmin, getAllTasks)

// get task by id
router.get("/:id", verifyAdmin, getTask);

// create a new task
router.post("/", verifyAdmin, createTask)

// delete task
router.delete("/:id", verifyAdmin, deleteTask);

// update task
router.put("/:id", verifyAdmin, updateTask);
// update task
router.put("/complete/:id", verifyAdmin, toggleTaskCompletion);


export default router