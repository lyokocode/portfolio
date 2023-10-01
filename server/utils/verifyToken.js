import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "Your are not authanticated"));

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"))
        req.user = user;
        next()
    });
};
