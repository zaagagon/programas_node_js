//hacemos uso del modulo http
/*
variable http que en realidad es un objeto, 
sobre el que podemos invocar 
métodos que estaban en el módulo requerido
*/ 
var http = require("http");
//creacion del servidor usando el puerto 3000
var servidor = http.createServer(function(peticion,respuesta){
respuesta.end("hola mundo de zag.com");
});

servidor.listen(3000,function(){
   console.log("Servidor escuchando y listo"+ this.address().port); 
});
//ejemplo de un callback

function callback() {
    return '**El mundo de zag**';
}

console.log(callback());