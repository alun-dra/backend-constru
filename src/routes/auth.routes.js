import { Router } from "express";
import { 
    SigUp,
    SignIn
} from '../controllers/auth.controller.js'


const router = Router()

router.post('/singin', SignIn)
router.post('/singup', SigUp)


export default router