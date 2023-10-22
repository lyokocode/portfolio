import express from "express";

import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/User.js"

const router = express.Router()


// GET ALL USERS
router.get("/", getAllUser)

// DELETE USER
router.delete("/user", deleteUser)

// GET USER
router.get("/user", getUser)

// UPDATE USER
router.put("/user", updateUser);

export default router

