const express = require('express');
const path = require('path');

const app = express();

// Configurar carpeta pública para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para home.html
app.get('/hola', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hola.html'));
});

// Ruta para about.html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Iniciar servidor
const PORT = 9012;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
