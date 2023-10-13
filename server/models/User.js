import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Blog } from "./Blog.js";

export const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false
    },
});

