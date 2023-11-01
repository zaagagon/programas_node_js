if (process.argv.length < 3) {
    console.log("Uso: node menu.js [opción]");
    process.exit(1);
}

const opcion = process.argv[2];

switch (opcion) {
    case 'opcion1':
        console.log("Seleccionaste la Opción 1.");
        break;
    case 'opcion2':
        console.log("Seleccionaste la Opción 2.");
        break;
    case 'salir':
        console.log("Saliendo del programa.");
        break;
    default:
        console.log("Opción no válida. Las opciones son 'opcion1', 'opcion2', o 'salir'.");
}
