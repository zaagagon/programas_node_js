const prompt = require('prompt-sync')();

// Genera un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("¡Bienvenido al juego de adivinar el número!");
console.log("Tienes dos oportunidades para adivinar un número entre 1 y 10.");

// Variable para llevar el control si el usuario adivina
let adivinado = false;
let intentos = 0;

// Bucle while para permitir dos intentos válidos al usuario
while (intentos < 2 && !adivinado) {
    // Solicita al usuario que ingrese un número y lo convierte en entero
    let numeroUsuario = parseInt(prompt(`Intento ${intentos + 1}: Ingresa tu número: `));

    // Verifica si la entrada es un número válido
    if (isNaN(numeroUsuario)) {
        console.log("Por favor, ingresa un número válido.");
        continue; // No cuenta este intento como válido y pide otro
    }

    // Incrementa el contador de intentos solo si la entrada es válida
    intentos++;

    // Comprueba si el usuario adivinó el número
    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número.");
        adivinado = true;
    } else {
        console.log("Incorrecto. Intenta de nuevo.");
    }
}

// Mensaje final si no ha adivinado el número
if (!adivinado) {
    console.log(`Lo siento, has agotado tus intentos. El número era: ${numeroSecreto}`);
}
