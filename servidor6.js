// Importamos express
const express = require('express');
// Importamos el módulo body-parser para procesar los datos del formulario
const bodyParser = require('body-parser');
// Creamos instancia de la aplicación
const app = express();
// Obtenemos el puerto del argumento de la línea de comandos
let puerto = process.argv[2] || 5001;

// Configuramos body-parser para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Creamos una ruta de prueba para el servidor
app.get('/', (req, res) => {
    // Agregamos estilo CSS al texto y lo coloreamos de azul
    const styledText = '<h1 style="color: blue;">¡Home en construcción!</h1>';
    
    // Agregamos algo más interesante, como un formulario de entrada simple
    const interactiveContent = `
        ${styledText}
        <form action="/submit" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <br>
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            <br>
            <button type="submit">Enviar</button>
        </form>
    `;

    // Enviamos la respuesta al cliente
    res.send(interactiveContent);
});

// Manejamos la solicitud POST en la ruta /submit
app.post('/submit', (req, res) => {
    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;
    
    // Aquí puedes hacer algo con los datos, como mostrarlos en la consola
    console.log(`Nuevo mensaje de ${nombre}: ${mensaje}`);

    // Puedes enviar una respuesta al cliente
    res.send(`<h2 style="color: green;">Mensaje enviado correctamente</h2>`);
});

// Escuchamos en el puerto especificado
app.listen(puerto, () => {
    console.log(`Servidor funcionando en http://localhost:${puerto}`);
});
