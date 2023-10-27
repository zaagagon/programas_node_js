//express importado servidor 4
express =require('express')

const app = express()

const port = 4002

//escuchar puerto

app.listen(port,()=>console.log(`servidor escuchando ${port}`))

