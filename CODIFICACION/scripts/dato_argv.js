//datos por argv

let heroe = {
    nombre : 'Steve',
    nick : 'capitan america'

} 
//muestra información del objeto
console.log(heroe.nombre);


//object keys
//clave : valor
let keys= Object.keys(heroe)
//muestra información del objeto
keys.forEach(function(key) {
    console.log(key + ': ' + heroe[key]);
  });

