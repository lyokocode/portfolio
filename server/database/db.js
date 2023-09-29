import Sequelize from "sequelize"

export const sequelize = new Sequelize('portfolio', 'postgres', 'aelita', {
    host: 'localhost',
    dialect: 'postgres'
})