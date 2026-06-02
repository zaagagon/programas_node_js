// suma.js 9 8

const num1 = parseFloat(process.argv[2]);

const num2 = parseFloat(process.argv[3]);

if (!isNaN(num1) && !isNaN(num2)) {
  const suma = num1 + num2;
  console.log(`La suma es funcion de ${num1} y ${num2} es: ${suma}`);
} else {
  console.log('Por favor, ingrese dos números válidos.');
}
