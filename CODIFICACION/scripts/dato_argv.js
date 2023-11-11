//datos por argv

let heroe = {
    nombre : 'Steve',
    nick : 'capitan america'

} 
//muestra información del objeto
console.log(heroe.nombre);
console.log(heroe.key[0]);

//object keys
//clave : valor
let keys= Object.keys(heroe)

let dato= heroe.forEach(element => {
    return element
});

console.log(dato);