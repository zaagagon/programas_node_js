
// Importar el módulo prompt-sync
const prompt = require('prompt-sync')();


let opcion;

while (opcion !== 3) {
    console.log("Menú:");
    console.log("1. Ingresar dos números y saber cuál es mayor");
    console.log("2. Ver última comparación");
    console.log("3. Salir");
    
    // Solicitar la opción del usuario
    opcion = parseInt(prompt("Seleccione una opción (1, 2 o 3):"));
    
    switch (opcion) {
        case 1:
            // Pedir al usuario dos números
            let numero1 = parseFloat(prompt("Ingrese el primer número:"));
            let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
            
            // Comparar los números y mostrar el resultado
            if (numero1 > numero2) {
                console.log(`El número ${numero1} es mayor que ${numero2}`);
            } else if (numero2 > numero1) {
                console.log(`El número ${numero2} es mayor que ${numero1}`);
            } else {
                console.log("Ambos números son iguales.");
            }
            break;

        case 2:
            console.log("Mostrando la última comparación...");
            break;

        case 3:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida. Por favor seleccione una opción entre 1 y 3.");
    }
}
