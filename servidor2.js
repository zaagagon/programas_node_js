//servidor con ruta hello

//llamamos express

const express = require('express')
//tomamos el puerto

const port=3001

const app= express()

//definir ruta + controlador = home

app.get('/home',(req,res)=>{
    res.send('<h1>Inicio en construcción<h1>');

}
)

//ruta 2
app.post('/users', (req, res) => {
    res.send("Recibimos un POST a /users");
  })



//puerto escucha

app.listen(port,()=>{
    console.log(`servidor escuchando en.. ${port}`)
})