// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'build')));

// Ruta para servir la página HTML
app.get('/pagina', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
