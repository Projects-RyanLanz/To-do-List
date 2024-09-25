import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";

const app: Application = express()
const prisma = new PrismaClient() 
const PORT = 3000 
app.use(express.json())

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.users.findMany(); // Busca todos os usuários
        res.json(users); // Retorna os usuários em formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.listen(PORT, () => {
    console.log(`Listening to requests hon port ${PORT}`);
})