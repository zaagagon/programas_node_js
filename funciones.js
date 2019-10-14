/* 
archivo: ejemplos de funciones
author : @zag
*/

//funcion nombre
function nombre (name){
    return name;
}
//enviamos el argumento zag a la funcion
console.log('Mi nombre es ' + nombre('zag'));

//funcion n2

function saludar(){

    //console.log();
    alert("hola zag ");
} saludar();

function factorialR(){
    if(n==0){
        return 1
    } else {
        return factorialR(n-1)*n
    }
}