const express = require("express")

const app = express()

const port=3003

//definir ruta para solicitudes http de tipo get
app.get('/',(req,res) => {
    res.send('hola desde express en el puerto 3003')
})


app.listen(port,() => 
    console.log(`servidor corriendo en puert ${port}`)
);
