//servidor express

const express =require('express')
const app = express()

//sin ruta

app.get("/", function (req, res) {
    res.send("Hola Mundo de nuevo !");
   // res.send(alert("servidor en construcción"))
  });

  //ejecución script app
  //node --watch app.js ya fue instalado express como dependencia
  


//servidor escuchando 
app.listen(3003)
//mensaje por consola
console.log("servidor ok");

//alert("servidor en construcción")
/*var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});*/