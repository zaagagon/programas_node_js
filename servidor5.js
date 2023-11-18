//importamos
express=require('express')
//creamos instancia
const app= express()

let puerto = process.argv[2]
//escucha 5001
app.listen(puerto)
//console.log("servidor ok en puerto 5001");
console.log(`servidor funcionando en ${puerto}`);