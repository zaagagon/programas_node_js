const express = require('express')
const app = express()
const port = 3011

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))

})

app.get('/mensaje', (req, res) => {
  res.send('Hola CodeExplorer desde Express')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

