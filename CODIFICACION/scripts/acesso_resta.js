//recibir los datos 

let n1=parseInt(process.argv[2])
let n2 = parseInt(process.argv[3])


//creamos una funcion
function resta(n1,n2) {
    return n1 - n2

}

//llamado de la función
//console.log(resta(n1,n2));=
let result  = resta(n1,n2)
//console.log(resta(n1,n2));
console.log(result);