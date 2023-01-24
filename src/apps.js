import express from "express"
import projectsRouter from './routes/projects.routes.js'
import tasksRouter from './routes/task.routes.js'
import SinginRouter from './routes/auth.routes.js'


const app = express()


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//router
app.use('/api', projectsRouter)
app.use('/api', tasksRouter)
app.use('/api', SinginRouter)




export default app