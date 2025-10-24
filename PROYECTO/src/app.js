import express from "express";
import { logger, notFound, errorHandler } from "./middlewares/basic.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/taskRoutes.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const openapiPath = path.resolve(__dirname, "../openapi/taskmanager.yaml");
const openapiDocument = YAML.load(openapiPath);


const app = express();

app.use(express.json()); // Habilitar JSON
app.use(logger);


app.use("/explorer", swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.use("/tasks", taskRoutes);



app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Task Manager API" });
});

app.get("/taskmanager-api.json", (req, res) => {
  res.type("application/json").send(JSON.stringify(openapiDocument, null, 2));
});

app.use(notFound);
app.use(errorHandler);
export default app;