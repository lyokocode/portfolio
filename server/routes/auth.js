import express from "express";
import { login, logout, register } from "../controllers/Auth.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)

// LOGOUT
router.post("/logout", verifyToken, logout)

export default router
