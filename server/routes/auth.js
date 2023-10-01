import express from "express";
import { login, register } from "../controllers/Auth.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)

// CHECK AUTHANTICATED

router.get("/check", verifyToken, (req, res, next) => {
    res.send("you are loged in")
})

export default router
