const express = require("express")

const app = express()
const port= 3005
//arreglo productos
const productos = [
    { id: 1, nombre: 'producto1', categoria: 'categoria1' },
    { id: 2, nombre: 'producto2', categoria: 'categoria2' }
    { id: 2, nombre: 'producto2', categoria: 'categoria2' }
];

//manera de servir archivos estaticos desde la carpeta public
app.use(express.static('public'))

app.get('/mensaje',(req, res)=>{
    res.send('hola servidor construido en nodes js')
});

app.get('/productos/',(req,res)=>{
    //array de objetos productos
    //
    const productos =[
        {id:1,nombre:'iphone', categoria:'Accesorios'},
        {id:2,nombre:'dron', categoria:'Accesorios'},
        {id:3,nombre:'macbook air', categoria:'Portatiles'}
    ];
    res.json(productos)
})

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(port,()=>{
    console.log(`servidor en node js corriendo  en  el puerto : ${port}`);
    
})
