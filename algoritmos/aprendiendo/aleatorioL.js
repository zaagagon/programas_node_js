const prompt = require("prompt-sync")(); // Declarando el prompt

let ran = 4; // Número secreto
let numusuario = prompt("Adivina el numero que tengo en mente del 1 al 10: "); // Primera solicitud de entrada al usuario

for (let i = 1; i <= 2; i++) {
    if (numusuario == ran) {
        console.log("Enhorabuena, ¡adivinaste!");
        break; // Termina el juego si el usuario adivina correctamente
    } else {
        console.log(`Vuelve a intentarlo, te quedan ${2 - i} intentos`);
    }
    numusuario = prompt("Adivina nuevamente: "); // Actualiza el valor de numusuario en cada intento
}

console.log("Te quedaste sin intentos");
