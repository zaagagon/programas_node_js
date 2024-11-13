function sumarArreglo(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Ejemplo de uso:
let numeros = [5, 10, 15, 20];
console.log(`La suma de los números ${numeros} es: ${sumarArreglo(numeros)}`);
