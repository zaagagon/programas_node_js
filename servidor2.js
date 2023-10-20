//servidor con ruta hello

//llamamos express
//importamos express desde node_modules

const express = require('express')
//tomamos el puerto

const port=3001
//creamos el objeto o instancia de express
const app= express()

//ruta 2

//app.post('/users', (req, res) => {
  //  res.send("Recibimos un POST a /users");
  //})

//definir ruta + controlador = home

app.get('/home',(req,res)=>{
    res.send('<h1>Inicio en construcción<h1>');
    
}
)
app.get('/',(req,res)=>{
    res.send('<h1>Inicio en construcción<h1>');
    
}
)

//ruta 3
app.get('/contacto',(req,res)=>{
    //handler
    res.send('<h1 >Contacto en construcción<h1>');
    

}

)





//puerto escucha

app.listen(port,()=>{
    console.log(`servidor escuchando en.. ${port}`)
})