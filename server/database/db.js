import Sequelize from "sequelize"

export const sequelize = new Sequelize('postgres', 'postgres', 'IteWhAbEgEI9zEyc', {
    host: 'db.bizdptqtvsjekgsblenm.supabase.co',
    dialect: 'postgres'
})