
// Variable con ámbito global
let globalVar = "Soy yo variable global";

//creamos funcion

function pruebaScope() {
  // Variable con ámbito local
  let localVar = "Soy yo variable local";
// *****
  console.log(globalVar); 
  // *****
  console.log(localVar);  
}

//llamado de la funcion
pruebaScope();

console.log(globalVar); 
console.log(localVar);  
 // cual es la salida?