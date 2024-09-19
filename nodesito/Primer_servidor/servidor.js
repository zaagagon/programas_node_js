//Importando modulos
const express = require('express');
const path =require('path');

const app =express();
//configurar la carpeta publica
app.use(express.static(path.join(__dirname,'public')));

//ruta de inicio
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//arrancar el servidor
const PORT= process.env.PORT || 3007;
app.listen(PORT,()=>{
    console.log(`servidor ejecutandose en http://localhost:${PORT}`);
    
});