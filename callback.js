//importar exportar chalk
const chalk = require('chalk')

//ejemplo de un callback
function callback(){
    return 'este es un ejemplo';
}
 console.log(callback());



 function hagoAlgo(callback) {
    callback();
}

hagoAlgo(function(){
    console.log(chalk.red('Hola Zaagagon !!'));
    //funcionó chalk red
})

function hagoAlgo(callback) {
    callback(' -- El mundo de Zag --');
}

hagoAlgo(function(a){
    console.log(a);
})

