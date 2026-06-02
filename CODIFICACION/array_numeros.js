//arreglo de numeros
const numeros=[4,6,5,8,9]


//mostrar tamaño del arreglo
console.log("tamaño del arreglo :" +numeros.length);

//sumemos los elementos del arreglo

//funcion flecha
const sumita=numeros.reduce((acumulador,numero)=>{
    return acumulador + numero
},0)
//mostramos sumita
console.log(`resultado de suma de elementos ${sumita}`);
//mostremos el arreglo
console.log("elementos del arreglo");
numeros.forEach((numero) => {
    console.log(numero);
    
});