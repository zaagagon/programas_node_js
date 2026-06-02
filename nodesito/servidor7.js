const express = require('express')
const app = express()
const path =require('path')
const port = process.env.PORT || 3004

//servir archivos estaticos
app.use(express.static(path.join(__dirname,'public')))
//creamos la ruta para mostrar el archivo index
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname,'public',index.html))
})

app.get('/', (req, res) => res.send('<h1>Bienvenido a mi API!<h1/>'))

app.get('/api/products', (req, res) => {
    const products= [
        {id:1,name :'Logan',nickname:'wolverine' },
        {id:2,name :'Wade',nickname:'Deadpool' }

    ]
  res.send(products)
})

app.get('/api/index.html', (req, res) => {
  res.send('GET request to the homepage')
})
app.listen(port, () => console.log(`Example app ww listening on port ${port}!`))