// Define la cantidad de niveles
const niveles = 4;

// Genera el patrón de pirámide
for (let i = 1; i <= niveles; i++) {
  // Espacios a la izquierda para centrar cada nivel
  let espacios = " ".repeat(niveles - i);
  console.log(espacios);
  console.log(espacios);
  
  // Repite el número 'i' (2*i - 1) veces para formar la pirámide
  let numeros = i.toString().repeat(2 * i - 1);
  console.log(numeros);
  
  // Imprime la línea de la pirámide
  console.log(espacios + numeros);
}

let palabra = "Hola";
let resultado = palabra.repeat(3);
console.log(resultado); // Salida: "HolaHolaHola"

