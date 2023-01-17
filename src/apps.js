import express from "express"
import projectsRouter from './routes/projects.routes.js'
import tasksRouter from './routes/task.routes.js'
import SinginRouter from './routes/auth.routes.js'


const app = express()


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//router
app.use('/api', projectsRouter)
app.use('/api', tasksRouter)
app.use('/api', SinginRouter)




export default app