//programa en js que muestra edad mayor o menor

const prompt=require("prompt-sync")();

//crear variable edad

let edad=prompt("ingrese su edad :");

//como usar en if
if(edad>=18){
    console.log("Usted es mayor de edad ");
} else{
    console.log("Usted es menor edad ");
}

//console.log(edad);