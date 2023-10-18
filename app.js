
//cambios realizados en package json
//start:nodemon app.js
//ejecuto : npm start -- para nodemon en watching
//revisart luego npm start que abre callback
//npm run start
//servidor express

const express =require('express')
const app = express()
const userRouters= require('./app/routers/user')
//usamos las rutas exportadas desde este archivo
app.use(userRouters)

/*app.get("/", function (req, res) {
    res.send("Hola Mundo de nuevo con nodemon!");
   // res.send(alert("servidor en construcción"))
  });*/

  //ejecución script app
  //node --watch app.js ya fue instalado express como dependencia
  


//servidor escuchando 
app.listen(3003)
//mensaje por consola
console.log("servidor ok con nodemon");

//alert("servidor en construcción")
/*var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});*/