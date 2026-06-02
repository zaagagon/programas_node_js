//api con nodemon -- node install nodemon
//nodemon index.js
const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());
/*
Un objeto es una colección de propiedades, 
donde cada propiedad es una pareja clave-valor.
*/

//array de objetos en js
let users = [
    { id: 1, name: 'Nick', email: 'fury@marvel.com' },
    { id: 2, name: 'Hulk', email: 'banner@marvel.com' },
    { id: 3, name: 'Wade', email: 'deadpoll@marvel.com' },
    { id: 4, name: 'Coloso', email: 'xman@marvel.com' }
];

// Endpoint para obtener la lista de usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Endpoint para agregar un nuevo usuario
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint para actualizar un usuario existente
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');

    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// Endpoint para eliminar un usuario
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('Usuario no encontrado');

    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
});

// Endpoint para actualizar parcialmente un usuario
app.patch('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;

    res.json(user);
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
