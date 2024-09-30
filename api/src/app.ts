import express, { Application } from "express";
import { PrismaClient } from "@prisma/client"; 
import router from "./routes/taskRouter" 
import cors from "cors" 

const taskRouter = router

const app: Application = express()
const prisma = new PrismaClient() 
const PORT = 3000 
app.use(cors({
    origin: 'http://localhost:5173' // Permite apenas esta origem
}));
app.use(express.json())


//GET
app.use('/task',taskRouter)
app.use('/task/{id}',taskRouter)  


app.listen(PORT, () => {
    console.log(`Listening to requests hon port ${PORT}`);
})
 