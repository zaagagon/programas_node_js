//proyecto que corre con npx sin instalar nodemon de manera global en nuestro sistema
const express = require('express')
const app = express()
const path=require('path')
const port = 3000
//middleware para servir archivos estaticos desde carpeta publica
app.use(express.static(path.join(__dirname,'public')))

//ruta de mensaje
app.get('/mensaje', (req, res) => res.send('Hello CodeExplorers **!'))

app.get('/api/personajes', (req, res) => {
    const personajes=[

        {
            name:'logan',
            nickname:'wolverine',
            power: 'healing factor, adamantium claws'
        },
        {}
    ]
  res.send(personajes)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))