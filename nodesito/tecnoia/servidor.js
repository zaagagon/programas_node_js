//importando express
const express=require('express')
const path=require('path')
//instancia de express
const app=express()
//puerto del servidor
const port=process.env.port || 3001

//middleware servir archivo estaticos desde la carpeta public
app.use(express.static(path.join(__dirname,'public')))
console.log(__dirname);
//ruta de inicio 
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname,'public','menu.html'))
  
  
})
app.get('/accesorios', (req, res) => {
  res.sendFile(path.join(__dirname,'public','accesorios.html'))
})
app.get('/clientes', (req, res) => {
  res.sendFile(path.join(__dirname,'public','clientes.html'))
})

app.get('/prueba', (req, res) => {
  res.send('<h1 style="color:blue">Hola Bienvenidos CodeExplorers desde Express**</h1>')
})

//ruta api de personajes
app.get('/api/personajes', (req, res) => {
    const personajes=[
        {id:1,nombre:'logan',nickname:'wolverine'},
        {id:2,nombre:'wade',nickname:'deadpool'},
        
    ]
  res.json(personajes)
})

app.get('/mensaje', (req, res) => {
  res.send('<h2 style="color:red">**Hola CodeExplorers desde ruta mensaje **</h2>')
})
prueba = __dirname;
app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
    console.log(" pilas .." +prueba);
    
})
