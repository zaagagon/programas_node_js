const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');
const port = 3025;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para procesar datos del formulario (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Ruta de mensaje
app.get('/mensaje', (req, res) => res.send('<h1>Hola CodeExplorers practicando con Expressy watch!</h1>'));

// Ruta para mostrar el formulario
app.get('/formulario', (req, res) => {
    res.send(`
        <form action="/procesar-formulario" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <label for="nickname">Apodo:</label>
            <input type="text" id="nickname" name="nickname" required>
            <label for="power">Poder:</label>
            <input type="text" id="power" name="power">
            <button type="submit">Enviar</button>
        </form>
    `);
});

// Ruta para procesar el formulario (maneja una solicitud POST)
app.post('/procesar-formulario', (req, res) => {
    const { name, nickname, power } = req.body;
    res.send(`Nombre: ${name}, Apodo: ${nickname}, Poder: ${power || 'Ninguno'}`);
});

// Ruta de API personajes
app.get('/api/personajes', (req, res) => {
    const personajes = [
        { id :1, name: 'logan', nickname: 'wolverine', power: 'healing factor, adamantium claws' },
        { id :2, name: 'dfds', nickname: 'dfsdfs', power: '' }
    ];

    
    res.send(personajes);
});

// **Ruta dinámica para obtener un personaje por ID**
app.get('/api/personajes/:id', (req, res) => {
    const id = parseInt(req.params.id); // Convertir el ID a número
    const personaje = personajes.find(p => p.id === id); // Buscar personaje por ID

    if (!personaje) {
        return res.status(404).send('Personaje no encontrado');
    }

    res.json(personaje);
});

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',  // Cambie esto si su base de datos no está en localhost
    user: 'root',       // Su usuario de MySQL
    password: '123456789',       // La contraseña para MySQL
    database: 'prueba'  // El nombre de la base de datos que está utilizando
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Ruta para obtener todos los usuarios de la tabla "usuarios"
app.get('/usuarios2', (req, res) => {
    const query = 'SELECT * FROM usuarios'; // Consulta SQL
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results); // Enviar los resultados como JSON
    });
});

// Ruta para manejar la inserción de datos en la tabla 'usuarios'
app.post('/usuarios', (req, res) => {
    const { nombre, apellido, correo, contrasena } = req.body;  // Obtener los datos del formulario

    // Consulta SQL para insertar un nuevo usuario en la tabla 'usuarios'
    const query = 'INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)';

    // Ejecutar la consulta
    connection.query(query, [nombre, apellido, correo, contrasena], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            res.status(500).send('Error al insertar el usuario en la base de datos.');
            return;
        }

        // Enviar una respuesta exitosa al cliente
        res.send(`Usuario ${nombre} agregado correctamente.`);
    });
});

// Iniciar el servidor
app.listen(port, () => console.log(`Server listening on port ${port}!`));
