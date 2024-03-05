import express from "express";

import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/User.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()


// GET ALL USERS
router.get("/", verifyAdmin, getAllUser)

// DELETE USER
router.delete("/user", deleteUser)

// GET USER
router.get("/user", getUser)

// UPDATE USER
router.put("/:id", verifyUser, updateUser);

export default router

