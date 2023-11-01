// Función para imprimir el menú
function mostrarMenu() {
  console.log("Menú:");
  console.log("1. Sumar elementos");
  console.log("2. Encontrar el elemento más grande");
  console.log("3. Encontrar el elemento más pequeño");
  console.log("4. Salir");
}

// Función para sumar los elementos
function sumarElementos(valores) {
  let suma = 0;
  for (let i = 0; i < valores.length; i++) {
    suma += parseInt(valores[i]);
  }
  console.log("La suma de los elementos es: " + suma);
}

// Función para encontrar el elemento más grande
function encontrarMaximo(valores) {
  const maximo = Math.max(...valores.map(Number));
  console.log("El elemento más grande es: " + maximo);
}

// Función para encontrar el elemento más pequeño
function encontrarMinimo(valores) {
  const minimo = Math.min(...valores.map(Number));
  console.log("El elemento más pequeño es: " + minimo);
}

const args = process.argv;
if (args.length < 3) {
  console.log("Por favor, proporciona una opción (1/2/3/4) y valores separados por espacios.");
  mostrarMenu();
} else {
  const opcion = args[2];
  const valores = args.slice(3);

  switch (opcion) {
    case "1":
      sumarElementos(valores);
      break;
    case "2":
      encontrarMaximo(valores);
      break;
    case "3":
      encontrarMinimo(valores);
      break;
    case "4":
      console.log("Saliendo del programa.");
      break;
    default:
      console.log("Opción no válida. Por favor, selecciona una opción válida (1/2/3/4).");
      mostrarMenu();
  }
}
