import {Task} from '../models/task.js'

export const GetTask = async(req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/task
        method: Get
        description: enlista todas las tareas
    */
    try{
        const tasks = await Task.findAll()
        res.json(tasks)
    }catch(err){
        return res.status(500).json({ message: err.message })
    }

}

export const GetTaskOne = async(req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/task/{id}
        method: Get
        description: trae una tarea solamente
    */
    try{
        const {id} = req.params
        const taskOne = await Task.findOne({
            where:{
                id
            }
        })
        if(!taskOne)
            return res.status(404).json({message: 'la tarea no existe'})
        else{
            res.json(taskOne)
        }
    }catch(err){
        return res.status(500).json({ message: err.message })
    }

}

export const CreateTask = async (req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/task
        method: Post
        description: crea una tarea
    */
    try{
        const {name, Projectid} = req.body
        const newTask = await Task.create({
            name,
            Projectid,
        })
        res.json(newTask)
    }catch(err){
        return res.status(500).json({ message: err.message })
    }


}

export const UpdateTask = async(req, res) => {
    /*
        @url: http://{{host}}:{{port}}/api/task/{id}
        method: Put
        description: actualiza una tarea resiviendo el id por parametro y sus campos por el boby
    */
    try{
        const { id } = req.params
        const { name, Projectid } = req.body
        const UpdateTask =  await Task.findByPk(id)
        UpdateTask.name = name
        UpdateTask.Projectid = Projectid
        await UpdateTask.save()
        res.json(UpdateTask)
    
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
 
}

export const DeleteTask = async(req, res) => {
    /*
        @url: http://{{host}}:{{port}}/api/task/{id}
        method: Delete
        description: elimina una tarea por id resivido como parametro 
    */
    try{

        const {id} = req.params
        const taskDelete = await Task.destroy({
             where: {
                id
            }
        })
    
        if(!taskDelete)
            return res.status(404).json({message: 'la tarea no existe, o ya fue eliminado'})
        else{
            res.json({message: 'tarea eliminada'})
        }
    
    }catch(err){
        return res.status(500).json({ message: err.message })
    }


}


