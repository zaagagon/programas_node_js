const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); // MongoDB Client y ObjectId
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3050;

// Configuración de MongoDB
const mongoUri = 'mongodb://servidor10:27017'; // Cambia 'servidor10' por tu IP o hostname de MongoDB
const mongoClient = new MongoClient(mongoUri);
let personajesCollection;

async function conectarMongoDB() {
    try {
        await mongoClient.connect();
        console.log('Conexión exitosa a MongoDB');
        const database = mongoClient.db('heroes');
        personajesCollection = database.collection('personajes');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

conectarMongoDB();

// Configuración de MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'prueba'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos MySQL:', err);
        return;
    }
    console.log('**Conexión exitosa a MySQL**');
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas de ejemplo y formulario
app.get('/mensajero', (req, res) => res.send('<h1>Hola CodeExplorers practicando con Express y watch!</h1>'));

app.get('/mensaje2', (req, res) => res.json('Hola CodeExplorers practicando con Express y watch!'));

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

app.post('/procesar-formulario', (req, res) => {
    const { name, nickname, power } = req.body;
    res.send(`Nombre: ${name}, Apodo: ${nickname}, Poder: ${power || 'Ninguno'}`);
});

// Ruta para obtener todos los documentos en la colección `personajes`
app.get('/datos', async (req, res) => {
    try {
        const personajes = await personajesCollection.find().toArray();
        res.json(personajes); // Enviar todos los personajes en formato JSON
    } catch (err) {
        console.error('Error al obtener los personajes:', err);
        res.status(500).send('Error en el servidor');
    }
});

// CRUD MongoDB Rutas para `personajes`
// Obtener todos los personajes
app.get('/api/personajes', async (req, res) => {
    try {
        const personajes = await personajesCollection.find().toArray();
        res.json(personajes);
    } catch (err) {
        console.error('Error al obtener los personajes:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Obtener un personaje por su ID
app.get('/api/personajes/:id', async (req, res) => {
    try {
        const personaje = await personajesCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!personaje) return res.status(404).send('Personaje no encontrado');
        res.json(personaje);
    } catch (err) {
        console.error('Error al obtener el personaje:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Agregar un nuevo personaje
app.post('/api/personajes', async (req, res) => {
    const { name, nickname, power } = req.body;
    try {
        const result = await personajesCollection.insertOne({ name, nickname, power });
        res.json({ mensaje: 'Personaje agregado', personajeId: result.insertedId });
    } catch (err) {
        console.error('Error al agregar el personaje:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Actualizar un personaje por su ID
app.put('/api/personajes/:id', async (req, res) => {
    const { name, nickname, power } = req.body;
    try {
        const result = await personajesCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { name, nickname, power } }
        );
        if (result.matchedCount === 0) return res.status(404).send('Personaje no encontrado');
        res.json({ mensaje: 'Personaje actualizado' });
    } catch (err) {
        console.error('Error al actualizar el personaje:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Borrar un personaje por su ID
app.delete('/api/personajes/:id', async (req, res) => {
    try {
        const result = await personajesCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).send('Personaje no encontrado');
        res.json({ mensaje: 'Personaje eliminado' });
    } catch (err) {
        console.error('Error al eliminar el personaje:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Rutas de MySQL
app.get('/usuarios2', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});

app.post('/usuarios', (req, res) => {
    const { nombre, apellido, correo, contrasena } = req.body;
    const query = 'INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, correo, contrasena], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            res.status(500).send('Error al insertar el usuario en la base de datos.');
            return;
        }
        res.send(`Usuario ${nombre} agregado correctamente.`);
    });
});

// Iniciar el servidor
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
