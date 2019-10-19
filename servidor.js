//hacemos uso del modulo http
/*
variable http que en realidad es un objeto, 
sobre el que podemos invocar 
métodos que estaban en el módulo requerido
*/ 
var http = require("http");

//ejemplo de un callback

function callback() {
    return '**El mundo de zag**';
}

console.log(callback());