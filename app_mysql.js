const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3003;

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost', // Cambie por la dirección de su servidor MySQL
  user: 'root',      // Usuario de su base de datos
  password: '123456789',      // Contraseña de su base de datos
  database: 'prueba4' // Nombre de la base de datos
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    return;
  }
  console.log('Conexión exitosa a la base de datos prueba4.');
});

// Ruta para obtener los registros de la tabla usuarios

app.get('/',(req,res)=>{
    res.send('ho');
})
app.get('/usuarios', (req, res) => {
  //const query = 'SELECT * FROM personas';
  
  db.query('select * FROM personas', (err, results) => {
   /* if (err) {
      console.error('Error al ejecutar la consulta:', err.message);
      return res.status(500).send('Error al obtener los registros.');
    }*/
    
    res.json(results); // Enviar los registros en formato JSON
  });
});

// Servidor en ejecución
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
