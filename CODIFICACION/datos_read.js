const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario por su nombre
rl.question('Por favor, ingresa tu nombre: ', (nombre) => {
  // Pregunta al usuario por su apellido
  rl.question('Ahora, ingresa tu apellido: ', (apellido) => {
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`tu nombre completo es : ${nombre} ${apellido}`);
    rl.close();
  });
});

// Evento cuando la entrada se cierra
rl.on('close', () => {
  console.log('¡Gracias por ingresar tus datos!');
});
