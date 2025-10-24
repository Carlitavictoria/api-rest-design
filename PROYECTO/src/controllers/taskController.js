import { getAllTasks, createTask } from "../services/taskService.js";

export const getTasks = async (req, res, next) => {

  try{
    const { status, priority, page, limit, search } = req.query;
    const tasks = await getAllTasks({ status, priority, page, limit, search });
    res.json(tasks);
  }catch(err){
    next(err); // lo manejará el errorHandler global
  }
};

export const addTask = async (req, res) => {
  try {
    const { title, status, priority, description, dueDate } = req.body;

    // Validación mínima a nivel controlador (lo fuerte lo hace Mongoose)
    if (!title || !status) {
      return res.status(400).json({ error: "title and status are required" });
      // throw new Error(400,"title and status are required");
    }

    const newTask = await createTask({ title, status, priority, description, dueDate });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};