const express = require("express")

const app = express()

const port=3003

//definir ruta


app.listen(port,() => 
    console.log(`servidor corriendo en puert ${port}`)
);
