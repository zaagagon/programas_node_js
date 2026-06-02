const express = require('express');
const app = express();
const path = require('path');

// Configuración del directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/inventario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'inventario.html'));
  });

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
