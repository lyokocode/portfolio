import express from "express";

import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/User.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()


// GET ALL USERS
router.get("/", verifyAdmin, getAllUser)

// DELETE USER
router.delete("/user", verifyUser, deleteUser)

// GET USER
router.get("/user", verifyUser, getUser)

// UPDATE USER
router.put("/:id", verifyUser, updateUser);

export default router

