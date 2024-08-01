import express from "express"
import { createTask, deleteTask, getAllTasks, getTask, toggleTaskCompletion, updateTask } from "../controllers/Task.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()


// get all tasks
router.get("/", getAllTasks)

// get task by id
router.get("/:id", getTask);

// create a new task
router.post("/", createTask)

// delete task
router.delete("/:id", deleteTask);

// update task
router.put("/:id", updateTask);
// update task
router.put("/complete/:id", toggleTaskCompletion);


export default router