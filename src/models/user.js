import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'


//modelo de  la tabla
export const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha:{
                msg: 'el nombre solo puede contener letras'
            },
            len:{
                args :[4, 255],
                msg: 'el nombre tiene que ser minimanete de 4 caracteres'
            }
            
        }
    },
    password:{
        type:  DataTypes.STRING,
        allowNull: false,
        
    },
    email:{
        type:  DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:{
                msg: 'el correo electronico tiene que ser uno valido'
            },

            
        }
    }
}


)


User.associate = (models) =>{
    //text
}
