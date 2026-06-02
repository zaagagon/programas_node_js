const prompt = require('prompt-sync')();

// Genera un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("¡Bienvenido al juego de adivinar el número!");
console.log("Tienes dos oportunidades para adivinar un número entre 1 y 10.");

// Variable para llevar el control si el usuario adivina
let adivinado = false;

// Bucle for para dar dos intentos al usuario
for (let intento = 1; intento <= 2; intento++) {
    // Solicita al usuario que ingrese un número y lo convierte en entero
    let numeroUsuario = parseInt(prompt(`Intento ${intento}: Ingresa tu número: `));

    // Verifica si la conversión fue exitosa (es un número válido)
    if (isNaN(numeroUsuario)) {
        console.log("Por favor, ingresa un número válido.");
        continue; // Pide al usuario otro intento sin contar el actual como fallido
    }

    // Comprueba si el usuario adivinó el número
    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número.");
        adivinado = true;
        break; // Termina el juego si adivina correctamente
    } else {
        console.log("Incorrecto. Intenta de nuevo.");
    }
}

// Mensaje final si no ha adivinado el número
if (!adivinado) {
    console.log(`Lo siento, has agotado tus intentos. El número era: ${numeroSecreto}`);
}
