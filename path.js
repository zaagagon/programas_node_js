const { log } = require('console')
const path = require('path')

//console.log(path);
//console.log(path.dirname);

//mostrar separador 

console.log(`El separador en mi Sistema Operativo es: ${path.sep}`)
//muestra directorio actual
console.log(__dirname);
//directorio actual + directorio public
console.log(__dirname + '/public');