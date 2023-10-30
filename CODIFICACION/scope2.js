
// Variable con ámbito global
let globalVar = "Soy yo variable global";

function ejemploScope() {
  // Variable con ámbito local
  let localVar = "Soy yo variable local";
// Accesible: Imprimirá "Soy global"
  console.log(globalVar); 
  // Accesible: Imprimirá "Soy local"
  console.log(localVar);  
}

ejemploScope();

console.log(globalVar); // Accesible: Imprimirá "Soy global"
console.log(localVar);  // No accesible: Generará un error, localVar no está definida aquí
