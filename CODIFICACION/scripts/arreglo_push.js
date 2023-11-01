const frutas=["uvas","mangos"]

//foreach
frutas.forEach(fruta => {
    console.log("|"+fruta+"|");
    
});

//push metodo 
frutas.push("banano")
console.log("nuevo arreglo");
for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
    
}
frutas.unshift("piña")
function iterate(arreglo) {
    console.log(`Contenido arreglo ${arreglo}`);
    for (let i = 0; i < arreglo.length; i++) {
        const element = arreglo[i];
        console.log(element);
        
    }   
}

//llamado funcion iterate con frutas
iterate(frutas)

