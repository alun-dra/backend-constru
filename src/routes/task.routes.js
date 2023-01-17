import { Router } from "express";
import { 
    GetTask,
    CreateTask,
    UpdateTask,
    DeleteTask,
    GetTaskOne,
} from '../controllers/task.controller.js'

const router = Router()

router.get('/task', GetTask)
router.get('/task/:id', GetTaskOne)
router.post('/task', CreateTask)
router.put('/task/:id', UpdateTask)
router.delete('/task/:id', DeleteTask)


export default router