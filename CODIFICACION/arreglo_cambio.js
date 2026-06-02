const colores=["azul","amarillo","verde"]

console.log("prueba");
for(let i=0; i<colores.length;i++){
    
    setTimeout(() => {
        console.log(colores[i]);
    }, 2000);
    
}
setTimeout(() => {
    
    console.log("tamaño de arreglo ;"+colores.length);
}, 3000);
console.log(colores[2]);
