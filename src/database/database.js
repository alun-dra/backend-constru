import Sequelize from 'sequelize'
import {
    DB_PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
} from '../config/config.js'

export const sequelize = new Sequelize(
    DB_DATABASE, 
    DB_USER, 
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres',
        port: DB_PORT,
    }
)