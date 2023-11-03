
const express = require('express');
const mysql = require('mysql2');
const app = express();

const cors = require('cors');

const port = 5012; // Puerto del servidor backend
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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});
