import { TaskRepository } from "../repositories/taskRepository";
import { Request, Response } from "express";
const taskRepository = new TaskRepository()

export const getAllTask = async (req:Request,res:Response)=>{
        try{
            const tasks = await taskRepository.getAll()
            res.json(tasks)
        } catch(error){
            res.status(500).json({ error: 'Erro ao obter tarefas' });
        }
    }
 

     