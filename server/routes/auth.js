import express from "express";
import { login, logout, register } from "../controllers/Auth.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)

// LOGOUT
router.post("/logout", logout)


// CHECK AUTHANTICATED

router.get("/check", verifyToken, (req, res, next) => {
    res.send("you are logged in")
})
router.get("/check/:id", verifyUser, (req, res, next) => {
    res.send("you are logged in and you can delete your accaunt")
})

export default router
