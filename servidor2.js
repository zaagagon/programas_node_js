//servidor con ruta hello

//llamamos express

const express = require('express')
//tomamos el puerto

const port=3000

const app= express()

//definir ruta

//puerto escucha

app.listen(port,()=>{
    console.log(`servidor escuchando en.. ${port}`)
})