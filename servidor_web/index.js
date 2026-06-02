//importamos express

const express = require('express')
//creamos objeto o instancia de express
const app = express()

app.use(express.static(__dirname+'/public/'))
//app.use(express.static(__dirname + '/public/'));
console.log(__dirname + '/public');


app.listen(3006)
console.log('servidor web en puerto ');