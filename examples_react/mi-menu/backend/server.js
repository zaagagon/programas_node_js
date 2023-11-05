
const express = require('express');
const mysql = require('mysql2');
const app = express();

const cors = require('cors');

const port = 5013; // Puerto del servidor backend
// Habilitado CORS para permitir solicitudes
// desde cualquier origen
// Configura CORS para permitir solo un origen específico (en este ejemplo, http://localhost:3000)
/*const corsOptions = {
    origin: 'http://localhost:5010/api/obtener-datos', // Reemplaza con el origen que deseas permitir
  //};
  //app.use(cors({ origin: 'http://localhost:5010' }));
  //app.use(cors(corsOptions));
//app.use(cors());*/
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'prueba',
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta para obtener datos de la base de datos y responder con JSON
app.get('/api/obtener-datos', (req, res) => {
  // Realiza una consulta a la base de datos (ajusta la consulta según tus necesidades)
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
    } else {
        res.setHeader('Content-Type', 'application/json'); // Devuelve los datos como respuesta JSON
        res.json(results); // Devuelve los datos como respuesta JSON
    }
  });
});

//insertar
// ...


// Ruta para insertar datos en la base de datos
app.post('/api/insertar-datos', (req, res) => {
  const { nombre, apellido, correo, contrasena } = req.body;

  if (!nombre || !apellido || !correo || !contrasena) {
    res.status(400).json({ error: 'Por favor, proporciona nombre, apellido, correo y contraseña' });
  } else {
    // Realiza la inserción de datos en la base de datos
    db.query(
      'INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)',
      [nombre, apellido, correo, contrasena],
      (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Error al insertar datos en la base de datos' });
        } else {
          res.status(200).json({ message: 'Datos insertados correctamente' });
        }
      }
    );
  }
});


// ...

// Ruta para actualizar la información de un usuario
app.put('/ruta/actualizar/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  // Realiza la actualización en la base de datos
  db.query(
    'UPDATE usuarios SET apellido = ? WHERE nombre = ?',
    ['ormaza', nombre],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al actualizar la información' });
      } else {
        res.status(200).json({ message: 'Información actualizada correctamente' });
      }
    }
  );
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});
