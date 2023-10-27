
//importamos readline
const readline = require('readline');

//creamos la instancia

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question("Ingrese la cantidad de veces que desea mostrar 'Hola': ", (cantidadVeces) => {
  const veces = parseInt(cantidadVeces);

  if (!isNaN(veces)) {
    //let es mas moderna que var
    for (let i = 0; i < veces; i++) {
      console.log("Hola developers");
    }
  } else {
    console.log("Ingrese un número válido.");
  }

  entrada.close();
});
