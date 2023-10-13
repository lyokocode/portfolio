import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Blog = sequelize.define('Blog', {
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorImage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        unique: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blog: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});
