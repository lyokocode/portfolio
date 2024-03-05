import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./User.js";
import slugify from 'slugify';
import { Category } from "./Category.js";

export const Blog = sequelize.define('Blog', {
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    image: {
        type: DataTypes.STRING,
        unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('title', value);
            this.setDataValue('slug', slugify(value, { lower: true }));
        },
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
    popular: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    editorsPick: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const BlogCategory = sequelize.define('BlogCategory', {});



Blog.belongsToMany(Category, { through: BlogCategory });
Category.belongsToMany(Blog, { through: BlogCategory });

Blog.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(Blog)

