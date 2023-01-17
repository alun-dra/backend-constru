import { Router } from "express";
import { 
    GetProjects,
    CreateProjects,
    UpdateProject,
    DeleteProjet,
    GetProjectOne,
    GetProjectTask,
} from '../controllers/projects.controller.js'

const router = Router()

router.get('/projects', GetProjects)
router.get('/projects/:id', GetProjectOne)
router.post('/projects', CreateProjects)
router.put('/projects/:id', UpdateProject)
router.delete('/projects/:id', DeleteProjet)


router.get('/projects/:id/task', GetProjectTask)

export default router