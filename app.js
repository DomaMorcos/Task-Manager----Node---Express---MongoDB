const express = require ('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('../node-express-course-main/node-express-course-main/03-task-manager/starter/public'))
app.use(express.json())

//routes


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port =  3000

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
            console.log('server is listening on port 3000....'))
    } catch (error){
        console.log(error)
    }
}

start()

