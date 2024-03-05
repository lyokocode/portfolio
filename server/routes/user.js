import express from "express";

import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/User.js"
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()


// GET ALL USERS
router.get("/", getAllUser)

// DELETE USER
router.delete("/user", deleteUser)

// GET USER
router.get("/user", getUser)

// UPDATE USER
router.put("/:id", verifyUser, updateUser);

export default router

