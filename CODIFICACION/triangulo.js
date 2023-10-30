// Verificar si se proporcionaron los argumentos correctos
if (process.argv.length !== 4) {
    console.log("Uso incorrecto. Debes proporcionar la base y la altura del triángulo.");
    console.log("Ejemplo: node calculoTriangulo.js base altura");
    process.exit(1);
  }
  
  // Obtener la base y la altura desde los argumentos de la línea de comandos
  const base = parseFloat(process.argv[2]);
  const altura = parseFloat(process.argv[3]);
  
  // Verificar si los argumentos son números válidos
  if (isNaN(base) || isNaN(altura)) {
    console.log("Los valores proporcionados no son números válidos.");
    process.exit(1);
  }
  
  // Calcular el área del triángulo
  const area = (base * altura) / 2;
  
  // Mostrar el resultado
  console.log(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);
  console.log("hasta pronto **");