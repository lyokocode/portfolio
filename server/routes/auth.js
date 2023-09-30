import express from "express";
import { register } from "../controllers/Auth.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

export default router
