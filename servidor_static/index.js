//instalamos express

//podriamos crear nuestro json con npm init -y 
//crea por defecto el json

//npm i express -- instala node_modules

const express = require('express')
const app = express()

//ruta estatica
app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})
//ruta inicio
app.get('/inicio',(req,res)=>{
    //controlador o handler
    res.send("inicio construcción")

})



app.listen(3003)
console.log(`servidor estatico construcción en ${3002}`);