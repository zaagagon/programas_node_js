//importamos el modudlo
const express=require('express')
const path=require('path')

//creamos el objeto
const app2= express()

//usamos la funcion get con la ruta principal
//usamos la funcion con los parametros requerimiento y respuesta


app2.get('/',function(req,res){
//usamos el metodo send
//usemos h1 dentro de send enviando por send
    //res.send('<h1>Hola user</h1>')

    //objeto res y metodo sendFile
    //metodo que recibe string es la ruta absoluta del archivo
    //res.sendFile("/Volumes/kevin/1/programas_node_js/suma2.html")
res.sendFile(path.join(__dirname + "/suma2.html"))
}
//res.send("hola user")
)


//puerto del servidor
//usamos el metodo listen
app2.listen(3004)
console.log("servidor en linea esperando ...");
