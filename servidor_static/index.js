//instalamos express

//podriamos crear nuestro json con npm init -y 
//crea por defecto el json

//npm i express -- instala node_modules

const express = require('express')
const app = express()

app.listen(3002)
console.log(`servidor estatico construcción en ${3002}`);