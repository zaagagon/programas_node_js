const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /): ");

let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} // ... (resto de las operaciones)

if (resultado !== undefined) {
  console.log("El resultado es:", resultado);
} else {
  console.log("Operación inválida.");
}
