const express=require('express')

const app2= express()

app2.get('/',function(req,res))

//puerto del servidor
app2.listen(3004)
console.log("servidor en linea esperando ...");
