//ejemplo de for
//inicio, condicion, incremento i=i+1
for (var i=0; i<5;i++){
    //instrucción


    console.log("ADSO : " + i);
}

for(var num=0;num<=9;num++){
    console.log(num);
}

//var edad = prompt("por favor digite su edad");
//console.log("hola, tu edad es : " + edad);
console.log(process.argv);

//tomar el nombre por consola
console.log("mi Edad es : " +process.argv[2]);
var edad =13;
if (edad>=18) {
    console.log("eres mayor de edad");
    
}else{
    console.log("eres menor de edad");
} 


