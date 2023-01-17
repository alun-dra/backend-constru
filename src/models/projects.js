import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './task.js'

//modelo de  la tabla
export const Projects = sequelize.define('projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name :{
        type: DataTypes.STRING
    },
    description:{
        type:  DataTypes.STRING
    }
})

//relacion entre  tablas 
Projects.hasMany(Task, {
    foreignKey: 'Projectid',
    sourceKey:  'id'
})

Task.belongsTo( Projects,{
    foreignKey: 'Projectid',
    targetId:  'id'
})
