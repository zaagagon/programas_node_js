//servidor express

const express =require('express')
const app = express()

//sin ruta
alert("servidor en construcción")

//servidor escuchando 
app.listen(3001)
//mensaje por consola
console.log("servidor ok");
/*var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});*/