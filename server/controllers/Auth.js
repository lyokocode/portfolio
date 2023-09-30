import { User } from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    try {
        const newUser = await User.create({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            avatar: req.body.avatar,
            password: hash
        });
        return res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
}