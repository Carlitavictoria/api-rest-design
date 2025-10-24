import Task from "../models/task.js";

export const getAllTasks = async ({ status, priority, page = 1, limit = 50, search }) => {
  const query = {};
  if (status) query.status = status;
  if (priority) query.priority = priority;
  if (search) query.title = { $regex: search, $options: "i" };

  const skip = (Number(page) - 1) * Number(limit);
 


  const [items,totalItems] = await Promise.all(
      [
        Task.find(query).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }).lean(),
        Task.countDocuments(query)
      ]
  )
  const totalPages = Math.ceil(totalItems / Number(limit) || 1);

  return { items, page: Number(page), limit: Number(limit), totalItems, totalPages };
};

export const createTask = async (taskData) => {
  const created = await Task.create(taskData);
  return created.toObject();
};