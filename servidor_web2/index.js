//importamos express

const express =require('express')
//creamos objeto o instancia de express

const app = express()

//puerto del servidor
const puerto=3008

//ruta /
app.get('/',(req,res)=>{
    res.send('<h1>Pagina en construcción</h1>')
})

app.listen(puerto)
console.log("servidor 2 escuchando " + puerto);
//cadena con variable puerto
console.log("servidor 2 escuchando ",`${puerto}`);