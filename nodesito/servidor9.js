const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => res.send('Hello CodeExplorers!'))
app.listen(port, () => console.log(`Servidor corriendo en el puerto : ${port}!`))