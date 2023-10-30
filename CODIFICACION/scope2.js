
// Variable con ámbito global
let globalVar = "Soy yo variable global";

//creamos funcion

function pruebaScope() {
  // Variable con ámbito local
  let localVar = "Soy yo variable local";
// Accesible: Imprimirá "Soy global"
  console.log(globalVar); 
  // Accesible: Imprimirá "Soy local"
  console.log(localVar);  
}

//llamado de la funcion
pruebaScope();

console.log(globalVar); // Accesible: Imprimirá "Soy global"
console.log(localVar);  // No accesible: Generará un error, localVar no está definida aquí
 // cual es la salida?