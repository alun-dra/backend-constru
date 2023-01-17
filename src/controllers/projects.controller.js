import {Projects} from '../models/projects.js'
import {Task} from '../models/task.js'


export const GetProjects = async(req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/projects
        method: Get
        description: enlista todos los proyectos
    */

    try{
        const project = await Projects.findAll()
        res.json(project)
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

export const GetProjectOne = async(req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/projects/{id}
        method: Get
        description: trae un proyecto solamente
    */
    try{
        const {id} = req.params
        const projectOne = await Projects.findOne({
            where:{
                id
            }
        })
        if(!projectOne)
            return res.status(404).json({message: 'el projecto no existe'})
        else{
            res.json(projectOne)
        }

    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

export const CreateProjects = async (req, res) =>{
    /*
        @url: http://{{host}}:{{port}}/api/projects
        method: Post
        description: crea un proyecto
    */
    try{
        const {name, description} = req.body
        const newProject = await Projects.create({
            name,
            description
        })
        
        if(newProject.name == null)
            return res.status(500).json({message: 'el nombre es requerido'})
        else if(newProject.description == null){
            return res.status(500).json({message: 'la descripcion del projecto es requerida'})
        }else{
            res.json(newProject)
        }

    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

export const UpdateProject = async(req, res) => {
    /*
        @url: http://{{host}}:{{port}}/api/projects/{id}
        method: Put
        description: actualiza un proyecto resiviendo el id por parametro y sus campos por el boby
    */
    try{
        const { id } = req.params
        const { name, description } = req.body
        const UpdateProject =  await Projects.findByPk(id)
        UpdateProject.name = name
        UpdateProject.description = description
        await UpdateProject.save()

        res.json(UpdateProject)

    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

export const DeleteProjet = async(req, res) => {
    /*
        @url: http://{{host}}:{{port}}/api/projects/{id}
        method: Delete
        description: elimina un proyecto por id resivido como parametro 
    */
    try{

        const {id} = req.params
        const projectDelete = await Projects.destroy({
            where: {
                id
            }
        })

        if(!projectDelete)
            return res.status(404).json({message: 'el projecto no existe, o ya fue eliminado'})
        else{
            res.json({message: 'projecto eliminado'})
        }

    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

export const GetProjectTask = async(req, res) =>{
     /*
        @url: http://{{host}}:{{port}}/api/projects/{id}/task
        method: Get
        description: trae un projecto y  todas sus tareas
    */
    try{
        const {id} = req.params
        const projectOne = await Projects.findOne({
            where:{
                id
            }
        })
        const getTasks = await Task.findAll({
            where:{
                Projectid: id
            }
        })
        res.json(getTasks, projectOne)
    
    
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}