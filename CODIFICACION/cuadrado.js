// Obtén el valor del lado del cuadrado desde process.argv
const lado = process.argv[2];
console.log(process.argv[2]);
console.log(process.argv[3]);


// Convierte el valor del lado a un número
const ladoNumero = parseFloat(lado);

// Verifica si el valor es un número válido
//La función isNaN (Is Not-a-Number) 
if (!isNaN(ladoNumero)) {
  // Calcula el área del cuadrado
  const area = ladoNumero * ladoNumero;
  console.log(`El área del cuadrado con lado ${ladoNumero} es: ${area}`);
} else {
  console.log('Por favor, ingrese un número válido como lado del cuadrado.');
}
