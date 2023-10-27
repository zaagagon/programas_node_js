//express importado servidor 4
express =require('express')

const app = express()

const port = 4003

//ruta y handler

console.log(__dirname);
//escuchar puerto

app.listen(port,()=>console.log(`servidor escuchando ${port}`))

