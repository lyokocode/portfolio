import Sequelize from "sequelize"
import pg from 'pg';
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(process.env.SUPABASE_DB_OWNER, process.env.SUPABASE_DB_NAME, process.env.SUPABASE_PASSWORD, {
    host: process.env.SUPABASE_HOST,
    dialect: 'postgres',
    dialectModule: pg
})