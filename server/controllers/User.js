import { Blog } from "../models/Blog.js";
import { User } from "../models/User.js";


export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Blog,
                },
            ],
        });

        res.status(200).json(users);

    } catch (err) {
        next(err)
    }
}