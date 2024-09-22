const express = require('express')
const app = express()
const path=require('path')
const port = 3000
//middleware para servir archivos estaticos desde carpeta publica
app.use(express.static(path.join(__dirname,'public')))

//ruta de arr
app.get('/mensaje', (req, res) => res.send('Hello CodeExplorers **!'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))