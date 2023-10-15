//importamos el modudlo
const express=require('express')

//creamos el objeto
const app2= express()

app2.get('/',function(req,res){

    res.send("hola user")
}
//res.send("hola user")


)

//puerto del servidor
//usamos el metodo listen
app2.listen(3004)
console.log("servidor en linea esperando ...");
