const express = require('express')
const app = express()
const port = 9009

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/mensaje', (req, res) => res.send('<h1>mi primer servidor en express</h1>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))