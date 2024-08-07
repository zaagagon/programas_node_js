//api con nodemon -- node install nodemon
//nodemon index.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
/*
Un objeto es una colección de propiedades, 
donde cada propiedad es una pareja clave-valor.
*/

//array de objetos en js
let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' }
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

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
