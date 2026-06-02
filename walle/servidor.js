
//cliente servidor
const express = require('express')
const app = express()
const port = 9002
//rutas
app.get('/', (req, res) => {
  res.send('Practicando con mi primer servidor!')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto : ${port}`)
})
