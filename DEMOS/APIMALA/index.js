// server.js (mal diseño de API)
const express = require('express');
const app = express();


app.use(express.json());

app.post('/createTask', (req, res) => {
  res.send('Task created');
});

app.get('/getAllTasks', (req, res) => {
  res.send('List of tasks');
});

app.post('/updateTaskById/:id', (req, res) => {
  res.send(`Task ${req.params.id} updated`);
});

app.get('/removeTask/:id', (req, res) => {
  res.send(`Task ${req.params.id} removed`);
});

app.listen(3000, () => console.log('Bad API running on port 3000'));