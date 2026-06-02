const numeros=[3,4]
//arreglo original 
console.log(numeros);
//tamaño del arreglo
console.log(numeros.length);
//insertar elemento al final del arreglo
console.log(numeros.push(7));

console.log(numeros[2]);

//creamos nuevo arreglo

let arreglo_nuevo=numeros.map(function(elemento){
    return elemento;
})

console.log(arreglo_nuevo); 

//recorrido del arreglo
console.log("recorrido arreglo con foreach");
numeros.forEach(element => {
    console.log(element); 
    
});
