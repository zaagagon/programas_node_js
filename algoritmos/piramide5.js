const chalk = require('chalk');


const niveles = 4;

for (let i = 1; i <= niveles; i++) {
  // Bucle para imprimir el número i veces en la misma línea

  for (let j = 0; j < i; j++) {
    process.stdout.write(i + " * "); // Imprime el número sin salto de línea
  }
  console.log(chalk.red("@")); // Salto de línea al final de cada nivel
 
  
}
