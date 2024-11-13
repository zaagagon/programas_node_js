const chalk = require('chalk');

// Colores básicos
console.log(chalk.red('Este es un texto en rojo'));
console.log(chalk.green('Este es un texto en verde'));
console.log(chalk.blue('Este es un texto en azul'));

// Colores con estilos
console.log(chalk.bold.yellow('Texto en amarillo y negrita'));
console.log(chalk.underline.cyan('Texto subrayado en cian'));

// Combinación de colores y estilos
console.log(chalk.bgMagenta.white('Texto en blanco con fondo magenta'));

// Uso de cadenas compuestas
console.log(chalk.blue('Texto en azul') + ' y ' + chalk.red('texto en rojo'));
