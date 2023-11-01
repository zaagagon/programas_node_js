// Obtiene los argumentos de línea de comandos
const args = process.argv.slice(2);

// Verifica si se proporcionaron los argumentos necesarios
if (args.length !== 3) {
    console.log("Uso: node programa.js fruta1 fruta2 fruta3");
} else {
    const frutas = args;

    console.log("Arreglo de frutas inicial:", frutas);

    // Muestra un menú interactivo
    console.log("\nMenú:");
    console.log("1. Mostrar arreglo de frutas");
    console.log("2. Agregar una fruta");
    console.log("3. Eliminar la última fruta");
    console.log("4. Anexar una fruta al final");
    console.log("5. Anexar una fruta al principio");

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Seleccione una opción: ", function(opcion) {
        switch (opcion) {
            case '1':
                console.log("Arreglo de frutas actual:", frutas);
                break;
            case '2':
                rl.question("Introduce una fruta: ", function(fruta) {
                    frutas.push(fruta);
                    console.log("Fruta agregada. Nuevo arreglo de frutas:", frutas);
                });
                break;
            case '3':
                frutas.pop();
                console.log("Última fruta eliminada. Nuevo arreglo de frutas:", frutas);
                break;
            case '4':
                rl.question("Introduce una fruta para anexar al final: ", function(fruta) {
                    frutas.push(fruta);
                    console.log("Fruta anexada al final. Nuevo arreglo de frutas:", frutas);
                });
                break;
            case '5':
                rl.question("Introduce una fruta para anexar al principio: ", function(fruta) {
                    frutas.unshift(fruta);
                    console.log("Fruta anexada al principio. Nuevo arreglo de frutas:", frutas);
                });
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
        rl.close();
    });
}
