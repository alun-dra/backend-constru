import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {User} from '../models/user.js'
import {
    secret,
    expires,
    round,
} from '../config/auth.js'


export const SignIn = (req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/singin
        method: Post
        description: validacion de usuario
    */
    try{
        const {email, password} = req.body
        User.findOne({
            where:{
                email,
            }
        }).then(user =>{
            if(!user){
                return res.status(404).json({ message: 'Usuario no encontrado' })
            }else{
                if (bcrypt.compareSync(password, user.password)){
                    
                    const token = jwt.sign({user:user}, secret,{
                        expiresIn: expires
                    })
                    res.json({
                        user:user,
                        token:token
                    })

                }else{
                    return res.status(401).json({ message: 'la contraseña no coincide' })
                }
            }
        })
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}


export const SigUp = (req, res)=>{
    /*
        @url: http://{{host}}:{{port}}/api/singup
        method: Post
        description: crea un usuario 
    */

    try{
        const password = bcrypt.hashSync(req.body.password, Number.parseInt(round))
        const {name, email} = req.body
        User.create({
            name,
            email,
            password: password
        }).then(user => {
            const token = jwt.sign({user:user}, secret,{
                expiresIn: expires
            })
            res.json({
                user:user,
                token:token
            })
        })
        

    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}