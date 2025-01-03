const suma = require('./supersuma.js')
//const resu=supersuma()
//programa que suma dos numeros ingresados al ejecutar
n1=process.argv[2]
n2 =process.argv[3]
const num1= parseFloat(n1)
const num2= parseFloat(n2)
console.log(n1);
console.log(n2);
console.log(num1+num2);
suma(1,2)
const resultado=suma(num1,num2)
console.log("funcion suma exportada de supersuma : " + resultado);


//n1=process.argv[2]
