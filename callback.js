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