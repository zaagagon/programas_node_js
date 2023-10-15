
console.clear() //limpia pantalla
//Ejemplo de hello zag
console.log("EL MUNDO DE ZAG");
console.log('hola zag');

//PRUEBA CON  argv

console.log(process.argv);

//tomar el nombre por consola
console.log("Hola " +process.argv[2]);


//importar modulo suma
const suma=require('./modulo_suma.js')

console.log("resultado suma .." + suma(8,9));