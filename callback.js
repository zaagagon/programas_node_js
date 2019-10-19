//ejemplo de un callback
function callback(){
    return 'este es un ejemplo';
}
 console.log(callback());



 function hagoAlgo(callback) {
    callback();
}

hagoAlgo(function(){
    console.log('Hola Zaagagon !!');
})

function hagoAlgo(callback) {
    callback(' -- El mundo de Zag --');
}

hagoAlgo(function(a){
    console.log(a);
})

<input type="text" id="a" />
<input type="text" id="b" />
<button id="operar">
    Sumar
</button>