import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export class TaskRepository {
    async getAll(){
        return await prisma.task.findMany();
    }
}