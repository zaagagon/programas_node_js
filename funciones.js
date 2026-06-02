/* 
archivo: ejemplos de funciones
author : @zag
*/

//actualizado desde la nube usando el comando git pull
//actualizado desde el repostorio local con git push
//sintaxis de una funcion 

/*function nombre_funcion(parametros){

    instrucciones;
  }*/

  //funcion nombre
  var name2;
function nombre (name){
    return name;
}
//enviamos el argumento zag a la funcion
console.log('Mi nombre es ' + nombre('zag'));
name2 ="alirio"
console.log(name2);
console.log('mi nombres es ..'+ name2); 

//funcion n2
//var b;
/*function saludar(){

    //console.log();
 alert("hola zag");
} 
// posible error llamar asi la funcion saludar();
console.log(saludar());*/

function factorialR(n){
    if(n==0){
        return 1
    } else {
        return factorialR(n-1)*n
    }
}
//mostremos  en pantalla la funcion factorailR

console.log(factorialR(5));  
(function (global) {

    "use strict";
    
    var alert;  //  added this in to fix
    
    function initialize_page()
      {
      global.alert ("hi");
      }
    
    addEventListener('load', initialize_page);
    
    });
   //s (window);
