//comentarios
console.log("Hola developers");

//mi primer variable
//scope global
let usuario = "Carlos Andres : "


console.log("Hola "+ usuario + " desde una variable");

//mi primer funcion con js
function scope(){
//variable scope local
    let usuario2 = "lolo "
    console.log(usuario2 + "desde la funcion");
    console.log(usuario + "fuera de  la funcion");
}

//console.log(usuario2); //desde donde pueda acceder a usuario2
//desde la funcion supernicolas
console.log("mi primer arreglo");

scope()