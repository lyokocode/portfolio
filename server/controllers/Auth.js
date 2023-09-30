import { User } from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

// REGISTER
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

// LOGIN

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });

        if (!user) return next(createError(404, "user not found"))

        const isPsswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPsswordCorrect) return next(createError(400, "wrong password or username"))

        const { password, isAdmin, ...info } = user.dataValues
        res.status(200).json({ ...info })
    } catch (err) {
        next(err)
    }
}
