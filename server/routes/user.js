import express from "express";

import { getAllUser } from "../controllers/User.js"

const router = express.Router()


// GET ALL USERS
router.get("/", getAllUser)


export default router

