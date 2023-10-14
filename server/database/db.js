import Sequelize from "sequelize"
import pg from 'pg';

export const sequelize = new Sequelize('postgres', 'postgres', 'IteWhAbEgEI9zEyc', {
    host: 'db.bizdptqtvsjekgsblenm.supabase.co',
    dialect: 'postgres',
    dialectModule: pg
})