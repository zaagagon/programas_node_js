//instalamos express

//podriamos crear nuestro json con npm init -y 
//crea por defecto el json

//npm i express -- instala node_modules
const port = 4000

const express = require('express')
const app = express()

//ruta estatica
/*app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})*/

//ruta raiz
app.get('/',(req,res)=>{
    res.send('<h1>Pagina construcción rutas</h1>')
})

//ruta inicio

app.get('/inicio',(req,res)=>{
    //controlador o handler
    res.send("inicio construcción")

})
//nosotros
app.get('/nosotros',(req,res)=>{
    //controlador o handler
    res.send("inicio nosotros")

})
//contacto
app.get('/contacto',(req,res)=>{
    //controlador o handler
    res.send('<h1>Pagina contacto</h1>')

})


app.listen(port)
console.log(`servidor estatico construcción en ${port}`);