//datos por argv

let capitanAmerica = {
    nombre : 'Steve',
    nick : 'capitan america'

} 
//otro objeto
let ironMan = {
    nombre: 'Tony',
    nick: 'Iron Man'
};

//organizar en un array
let heroes = [capitanAmerica, ironMan, blackWidow, thor];


//muestra información del objeto
console.log(heroe.nombre);


//object keys
//clave : valor
let keys= Object.keys(heroe)
//muestra información del objeto
keys.forEach(function(key) {
    console.log(key + ': ' + heroe[key]);
  });

  let tamaño=Object.keys.length
  console.log(`datos que contiene ${tamaño}`);

