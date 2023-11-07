const numeros=[3,4]

console.log(numeros);

console.log(numeros.length);

console.log(numeros.push(7));

console.log(numeros[2]);

//creamos nuevo arreglo

let arreglo_nuevo=numeros.map(function(elemento){
    return elemento;
})

console.log(arreglo_nuevo); 
