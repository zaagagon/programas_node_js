// Define la cantidad de filas
const filas = 4; // Puedes cambiar este valor para obtener más filas

// Genera el patrón de pirámide
for (let i = 1; i <= filas; i++) {
  // Agrega los espacios para centrar la pirámide
  let espacios = " ".repeat(filas - i);
  
  // Repite el número 'i' veces
  let numeros = i.toString().repeat(i);
  
  // Imprime la línea de la pirámide
  console.log(espacios + numeros);
}
