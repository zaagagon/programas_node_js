//arreglo de numeros
const numeros=[4,6,5,8,9]


//mostrar tamaño del arreglo
console.log("tamaño del arreglo :" +numeros.length);
//mostremos el arreglo


//sumemos los elementos del arreglo
//funcion flecha
numeros.reduce((acumulador,numero)=>{
    return acumulador + numero
},0)
