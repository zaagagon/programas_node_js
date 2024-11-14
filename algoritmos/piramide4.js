const niveles = 4;
let i = 1;

while (i <= niveles) {
  let linea = ""; // Línea vacía para el nivel actual
  
  // Bucle for para concatenar el número i, i veces
  for (let j = 0; j < i; j++) {
    linea += i;  // Se concatena el número `i` como tal
    //console.log(linea);
    
  }

  console.log(linea); // Imprime la línea de este nivel
  i++; // Incrementa el nivel
}
