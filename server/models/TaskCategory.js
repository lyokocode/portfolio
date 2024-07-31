import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const TaskCategory = sequelize.define("TaskCategory", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});