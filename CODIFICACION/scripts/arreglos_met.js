// Función para sumar los elementos de un arreglo
function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 2; i < arreglo.length; i++) {
      suma += parseInt(arreglo[i]);
    }
    console.log("La suma de los elementos del arreglo es: " + suma);
  }
  
  // Función para encontrar el elemento más grande de un arreglo
  function encontrarMaximo(arreglo) {
    const maximo = Math.max(...arreglo.slice(2).map(Number));
    console.log("El elemento más grande del arreglo es: " + maximo);
  }
  
  // Función para encontrar el elemento más pequeño de un arreglo
  function encontrarMinimo(arreglo) {
    const minimo = Math.min(...arreglo.slice(2).map(Number));
    console.log("El elemento más pequeño del arreglo es: " + minimo);
  }
  
  const args = process.argv;
  
  if (args.length < 3) {
    console.log("Por favor, proporciona una opción (1/2/3) y al menos un número.");
  } else {
    const opcion = args[2];
  
    switch (opcion) {
      case "1":
        sumarArreglo(args);
        break;
      case "2":
        encontrarMaximo(args);
        break;
      case "3":
        encontrarMinimo(args);
        break;
      default:
        console.log("Opción no válida. Por favor, selecciona una opción válida (1/2/3).");
    }
  }
  