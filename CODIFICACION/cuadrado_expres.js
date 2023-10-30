const express = require('express');
const app = express();
//const port = process.env.PORT; // Utiliza el puerto especificado en la variable de entorno PORT o el puerto 3000 de forma predeterminada
const port= 5003
app.get('/', (req, res) => {
  const lado = parseFloat(req.params.lado);
  const area = lado * lado;
  const perimetro = 4 * lado;
  res.send(`Área del cuadrado: ${area}, Perímetro del cuadrado: ${perimetro}`);
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
