import express, { Application } from "express";
import { PrismaClient } from "@prisma/client"; 
import router from "./routes/taskRouter" 
const taskRouter = router

const app: Application = express()
const prisma = new PrismaClient() 
const PORT = 3000 

app.use(express.json())

 
app.use('/task',taskRouter) 
app.use('/task/{id}',taskRouter) 

app.listen(PORT, () => {
    console.log(`Listening to requests hon port ${PORT}`);
})