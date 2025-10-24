import express from "express";
import { logger, notFound } from "./middlewares/basic";
import { auth } from "./middlewares/access/auth";
import { standardOutput } from "./middlewares/format/standardOutput";

const app = express();

app.use(logger); // Se ejecuta para todas las rutas


app.use(express.json()); // Middleware nativo de Express


app.get("/tasks",auth,(req,res)=> {

    // adjuntar datos a la respuesta
    res.data = []
    next()
},standardOutput);

app.get("/health", (req, res) => res.json({ status: "ok" }));




app.use(notFound); // Para rutas inexistentes
app.use(errorHandler); // Manejo global de errores

export default app;