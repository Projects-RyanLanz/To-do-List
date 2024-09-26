import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

interface data{
  description: string; 
}

export class TaskRepository {
    //GET
    async getAll(){
        return await prisma.task.findMany();
    }
 
    async getById(id:number){ 
        return await prisma.task.findUnique({
            where:{
                id:id
            }
        });
    }
    
    //POST
    async addTask(data:data){ 
        return await prisma.task.create({data});
    }

    //UPDATE
    async update(id:number,data:{description?: string;}){ 
        return await prisma.task.update({
            where:{
                id:id
            },
            data,
        });
    }

    //DELETE
    async delete(id:number){ 
        return await prisma.task.delete({
            where:{
                id:id
            }, 
        });
    } 
}