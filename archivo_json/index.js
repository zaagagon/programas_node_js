const fs = require('fs/promises')
const path = require('path')

console.log('dirname', __dirname)

const rutaArchivoJson = path.join(__dirname, './archivo.json')
console.log(rutaArchivoJson)

const leerJSON = async ()=>{

    const data = await fs.readFile(rutaArchivoJson)
    const plainObject = JSON.parse(data)
    console.log(plainObject)
    return plainObject

}

const escribirJSON = async ()=>{
    const data = await leerJSON()
    console.log('data', data)
    data.apellido = "rogers"
    return fs.writeFile(rutaArchivoJson, JSON.stringify(data))
}   

escribirJSON().then(()=>{
    leerJSON()
})

leerJSON()

