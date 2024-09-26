import {Router} from "express"
import {createTask, deleteTask, getAllTask, getTaskByid, updateTask} from "../controller/taskController"

const router = Router()

//GET
router.get('/', getAllTask)
router.get('/:id', getTaskByid)

//POST
router.post('/', createTask)

//UPDATE
router.put('/:id', updateTask)

//UPDATE
router.delete('/:id', deleteTask)


export default router