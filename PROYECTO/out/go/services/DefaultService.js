/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Listar tareas
* Obtiene una lista paginada de tareas opcionalmente filtradas
*
* page Integer Página de resultados (optional)
* limit Integer Número de resultados por página (optional)
* status String Filtrar por estado (optional)
* priority String Filtrar por prioridad (optional)
* returns _tasks_get_200_response
* */
const tasksGET = ({ page, limit, status, priority }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        page,
        limit,
        status,
        priority,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Crear nueva tarea
*
* newTask NewTask 
* returns Task
* */
const tasksPOST = ({ newTask }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        newTask,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  tasksGET,
  tasksPOST,
};
