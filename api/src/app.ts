import express, { Application } from "express";
import { PrismaClient } from "@prisma/client"; 
import router from "./routes/taskRouter" 
const taskRouter = router

const app: Application = express()
const prisma = new PrismaClient() 
const PORT = 3000 

app.use(express.json())

app.use('/tasks',taskRouter)
//GET
 

//POST
app.post('/createTask', async (req, res) => {

    const { description } = req.body;
    const currentDate = new Date().toISOString()

    const result = await prisma.task.create({
        data: {
            description: description,
            updatedAt: currentDate,
        }
    })

    res.json(result)
})

app.listen(PORT, () => {
    console.log(`Listening to requests hon port ${PORT}`);
})