//servidor con ruta hello

//llamamos express

const express = require('express')
//tomamos el puerto

const port=3001

const app= express()

//ruta 2
app.post('/users', (req, res) => {
    res.send("Recibimos un POST a /users");
  })

//definir ruta + controlador = home

app.get('/home',(req,res)=>{
    res.send('<h1>Inicio en construcción<h1>');

}
)

//ruta 3
app.get('contacto',()=>{
    //handler
    
}

)





//puerto escucha

app.listen(port,()=>{
    console.log(`servidor escuchando en.. ${port}`)
})