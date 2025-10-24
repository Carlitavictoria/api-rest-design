// server.js (buen diseño de API)
const express = require('express');
const app = express();
app.use(express.json());

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Sample task' }]);
});

app.get('/tasks/:id', (req, res) => {
  res.json({ id: req.params.id, title: 'Sample task' });
});

app.post('/tasks', (req, res) => {
  res.status(201).json({ message: 'Task created' });
});

app.put('/tasks/:id', (req, res) => {
  res.json({ message: `Task ${req.params.id} replaced` });
});

app.delete('/tasks/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => console.log('Good API running on port 3000'));