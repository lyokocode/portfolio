import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
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
    categories: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
    },
    githubLink: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    projectLink: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});
