import { User } from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    console.log("first")
    try {
        const newUser = await User.create({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            avatar: req.body.avatar,
            password: req.body.password
        });
        return res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
}