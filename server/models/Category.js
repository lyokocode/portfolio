import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./User.js";
import { Blog } from "./Blog.js";

export const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    popular: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Category.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(Category)

