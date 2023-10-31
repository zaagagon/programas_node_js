//objetos process.argv

const argumentos=process.argv;
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);

//recorremos el objeto de argv
console.log("tamaño arreglo :" +argumentos.length);
//recorremos el arreglo

for (let i = 0; i < argumentos.length; i++) {
   /* const element = argumentos[i];
    console.log("desde for :" +element);
    console.log(`Elemento ${i}: ${element}`);
    console.log("sin funciona "+ argumentos[i]);*/
    console.log("for ok : "+ argumentos[i]);
    
}
console.log("desde el arreglo :" +argumentos[3]);
