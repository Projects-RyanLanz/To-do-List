import {Router} from "express"
import {getAllTask} from "../controller/taskController"

const router = Router()
 
router.get('/', getAllTask)

export default router