const express = require('express');
const app = express();
const port = 3011;

// Simular una lista de empleados
let empleados = [
    { id: 1, nombre: 'Juan', puesto: 'Desarrollador' },
    { id: 2, nombre: 'Ana', puesto: 'Diseñadora' },
    { id: 3, nombre: 'Carlos', puesto: 'Tester' },
    { id: 4, nombre: 'Jennifer', puesto: 'Desarrolladora' },
    { id: 5, nombre: 'Evelio', puesto: 'Desarrollador' },
    { id: 6, nombre: 'Deadpool', puesto: 'Fullstack' }

];

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener todos los empleados
app.get('/api/empleados', (req, res) => {
    res.json(empleados);
});

// Ruta para obtener un empleado por ID
app.get('/api/empleados/:id', (req, res) => {
    const empleado = empleados.find(e => e.id === parseInt(req.params.id));
    if (!empleado) return res.status(404).send('Empleado no encontrado');
    res.json(empleado);
});

// Ruta para agregar un nuevo empleado
app.post('/api/empleados', (req, res) => {
    const nuevoEmpleado = {
        id: empleados.length + 1,
        nombre: req.body.nombre,
        puesto: req.body.puesto
    };
    empleados.push(nuevoEmpleado);
    res.status(201).json(nuevoEmpleado);
});

// Ruta para actualizar un empleado
app.put('/api/empleados/:id', (req, res) => {
    const empleado = empleados.find(e => e.id === parseInt(req.params.id));
    if (!empleado) return res.status(404).send('Empleado no encontrado');
    
    empleado.nombre = req.body.nombre;
    empleado.puesto = req.body.puesto;
    res.json(empleado);
});

// Ruta para eliminar un empleado
app.delete('/api/empleados/:id', (req, res) => {
    const empleado = empleados.find(e => e.id === parseInt(req.params.id));
    if (!empleado) return res.status(404).send('Empleado no encontrado');
    
    const index = empleados.indexOf(empleado);
    empleados.splice(index, 1);
    res.json({ mensaje: 'Empleado eliminado' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
