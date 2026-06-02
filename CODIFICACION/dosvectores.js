const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para validar si un arreglo está ordenado de forma ascendente
function estaOrdenadoAscendentemente(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Función para fusionar dos arreglos ordenados
function fusionarArreglos(arr1, arr2) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultado.push(arr1[i]);
      i++;
    } else {
      resultado.push(arr2[j]);
      j++;
    }
  }

  return resultado.concat(arr1.slice(i), arr2.slice(j));
}

const vector1 = [];
const vector2 = [];

function ingresarElementos(vector, mensaje, limite, callback) {
  rl.question(mensaje, (entrada) => {
    const numero = parseInt(entrada);

    if (!isNaN(numero)) {
      vector.push(numero);
      if (vector.length < limite) {
        ingresarElementos(vector, mensaje, limite, callback);
      } else {
        callback();
      }
    } else {
      console.log('Por favor, ingrese un número entero válido.');
      ingresarElementos(vector, mensaje, limite, callback);
    }
  });
}

console.log('Ingrese los elementos del primer vector (máximo 5 elementos, ordenados ascendente):');
ingresarElementos(vector1, 'Número: ', 5, () => {
  console.log('Primer vector ingresado:', vector1);

  console.log('Ingrese los elementos del segundo vector (máximo 5 elementos, ordenados ascendente):');
  ingresarElementos(vector2, 'Número: ', 5, () => {
    if (estaOrdenadoAscendentemente(vector2)) {
      console.log('Segundo vector ingresado:', vector2);

      const resultado = fusionarArreglos(vector1, vector2);
      console.log('Lista ordenada de la mezcla de los dos vectores:', resultado);
      rl.close();
    } else {
      console.log('Por favor, ingrese los números en orden ascendente para el segundo vector.');
      rl.close();
    }
  });
});
