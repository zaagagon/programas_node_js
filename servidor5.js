//importamos
express=require('express')
//creamos instancia
const app= express()
//creamos ruta de prueba del servidor
app.get('/',(req, res)=>{
    res.send('<h1>home en construcción</h1>')
})

let puerto = process.argv[2]
//escucha 5001
app.listen(puerto)
//console.log("servidor ok en puerto 5001");
console.log(`servidor funcionando en ${puerto}`);