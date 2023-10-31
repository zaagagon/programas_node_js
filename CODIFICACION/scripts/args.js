//objetos process.argv

const argumentos=process.argv;
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);

//recorremos el objeto de argv
console.log("tamaño arreglo :" +argumentos.length);
//recorremos el arreglo

for (let index = 0; index < argumentos.length; index++) {
    //const element = argumentos[index];
    console.log(argumentos[index]);
}
console.log("desde el arreglo :" +argumentos[3]);
