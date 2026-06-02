const nombre = "Yolis"

console.log(`Hola como estas ${nombre}`);


const nick = process.argv[2]; // El primer argumento es process.argv[2]

if (nick) {
    console.log(`Hola, ${nick}!`);
} else {
    console.log("Por favor, ingresa tu nick como argumento.");
}