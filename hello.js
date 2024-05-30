
console.clear() //limpia pantalla
//Ejemplo de hello zag
console.log("EL MUNDO DE ZAG");
console.log('hola zag');

//PRUEBA CON  argv

console.log(process.argv);

//tomar el nombre por consola
console.log("Hola " +process.argv[2]);

//prueba
//importar modulo suma
const {suma,multiplicar}=require('./modulo_suma.js')
//importar multiplicar
//

console.log("resultado suma .." + suma(10,4));
console.log("probando operacion" + multiplicar(9,5));