import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { TaskCategory } from "./TaskCategory.js";
import { User } from "./User.js";

export const Task = sequelize.define("Task", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    priority: {
        type: DataTypes.ENUM('düşük', 'orta', 'yüksek'),
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
});

Task.belongsTo(TaskCategory, { foreignKey: 'categoryId' });
Task.belongsToMany(User, { through: 'TaskAssignees', foreignKey: 'taskId' });
User.belongsToMany(Task, { through: 'TaskAssignees', foreignKey: 'userId' });