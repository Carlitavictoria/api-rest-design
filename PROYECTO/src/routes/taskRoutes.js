import { Router } from "express";
import { getTasks, addTask } from "../controllers/taskController.js";

const router = Router();

router.get("/", getTasks);
router.post("/", addTask);

export default router;