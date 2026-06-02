
//importamos paquete express
const express=require("express");

const app = express();

//definir ruta 
app.get('/',(req, res)=>{
    res.send('información desde servidor express')
});

console.log(__dirname);

//puerto de mi servidor
const PUERTO = 3009;

app.listen(PUERTO,()=>{console.log(`servidor escuchando en ${PUERTO}`);})

