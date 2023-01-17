
import app from './apps.js'
import { sequelize } from './database/database.js'
import {PORT} from './config/config.js'


async function main(){
    try{
        // el metodo force elimina y crea nuevamente las tablas {force: true}
        // el metodo alter actualizas las tablas creadas en caso de que haya algun cambio  {alter: true}
        // el metodo sync(solo) crea tablas que no existan en la base datos 
        await sequelize.sync()
        console.log('la conexcion se establecio bien...')
        app.listen(PORT)
        console.log('servidor funcionando en: ', PORT)
    }catch (error){
        console.log('la conexion se perdio', error)
    }
}


main()