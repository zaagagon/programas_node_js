const express = require('express');
const path = require('path');
const app = express();
const port = 5009;

app.use(express.json());

let tasks = [
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, name: 'Tarea 2', completed: false },
    { id: 3, name: 'Tarea 3', completed: false }
];

// Endpoints de la API
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');

    task.title = req.body.title;
    task.completed = req.body.completed;
    res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Task not found');

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
