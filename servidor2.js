//servidor con ruta hello

//llamamos express
//importamos express desde node_modules

const express = require('express')
//tomamos el puerto

const port=3007
//creamos el objeto o instancia de express
const app= express()

//ruta 2

//app.post('/users', (req, res) => {
  //  res.send("Recibimos un POST a /users");
  //})

//definir ruta + controlador = home

app.get('/home',(req,res)=>{
    res.send('<h1>Inicio de facturación taller<h1>');
    
}
)
app.get('/',(req,res)=>{
    res.send('<h1>Inicio en construcción  JAZIEL<h1>');
    
}
)

//ruta 3
app.get('/contacto',(req,res)=>{
    //handler
    res.send('<h1 >Contacto en construcción<h1>');
    

}

)


app.get('/about', function (req, res) {
    res.send('about');
  });


//puerto escucha

app.listen(port,()=>{
    console.log(`servidor de Romero escuchando en.. ${port}`)
})