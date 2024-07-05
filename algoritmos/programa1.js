const prompt = require('prompt-sync')({ sigint: true });

// const nombre = prompt("digite su nombre :")

// console.log(`hola, ${nombre}`)

let amigo = "batman";
console.log("hola " + amigo + " amigo de superman");

let contador = 1;
while (contador < 4) {
    console.log(contador);
    contador++;
}

while (true) {
    let numero = parseInt(prompt("digite un numero :"));
    if (numero % 2 == 0) {
        console.log("es par");
        break;
    } else {
        console.log("es impar");
    }
}
