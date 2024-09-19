const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('<h1>Bienvenido a mi API!<h1/>'))

app.get('/api/products', (req, res) => {
    const products= [
        {id:1,name :'Logan',nickname:'wolverine' },
        {id:2,name :'Wade',nickname:'Deadpool' }

    ]
  res.send(products)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))