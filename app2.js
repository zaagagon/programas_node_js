//importamos el modudlo
const express=require('express')

//creamos el objeto
const app2= express()

//usamos la funcion get con la ruta principal
//usamos la funcion con los parametros requerimiento y respuesta


app2.get('/',function(req,res){
//usamos el metodo send
//usemos h1 dentro de send enviando por send
    res.send('<h1>Hola user</h1>')
}
//res.send("hola user")


)

//puerto del servidor
//usamos el metodo listen
app2.listen(3004)
console.log("servidor en linea esperando ...");
