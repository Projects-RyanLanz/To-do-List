import { TaskRepository } from "../repositories/taskRepository";
import { Request, Response } from "express";
const taskRepository = new TaskRepository()

//GET
export const getAllTask = async (req:Request,res:Response)=>{
    try{
        const tasks = await taskRepository.getAll()
        res.json(tasks)
    } catch(error){
        res.status(500).json({ error: 'Erro ao obter tarefas' });
    }
}

export const getTaskByid = async (req:Request,res:Response)=>{
    const id = Number(req.params.id)
    try{
        const tasks = await taskRepository.getById(id)
        res.json(tasks)
    } catch(error){
        res.status(500).json({ error: 'Erro ao obter tarefas' });
    }
}
  
//POST
export const createTask = async (req:Request,res:Response)=>{
    const {description} = req.body 

    try{
        const tasks = await taskRepository.addTask({description})
        res.json(tasks)
    } catch(error){
        res.status(500).json({ error: 'Erro ao obter tarefas' });
    }
}

//UPDATE
export const updateTask = async (req:Request,res:Response)=>{
    const id = Number(req.params.id)
    const description = req.body

    try{
        const tasks = await taskRepository.update(Number(id),description)
        res.json(tasks)
    } catch(error){
        res.status(500).json({ error: 'Erro ao obter tarefas' });
    }
}

//DELETE
export const deleteTask = async (req:Request,res:Response)=>{
    const id = Number(req.params.id) 

    try{
        const tasks = await taskRepository.delete(Number(id))
        res.json(tasks)
    } catch(error){
        res.status(500).json({ error: 'Erro ao obter tarefas' });
    }
}

     