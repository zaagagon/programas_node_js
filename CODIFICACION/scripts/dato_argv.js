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
//let heroes = [capitanAmerica, ironMan, blackWidow, thor];
let heroes = [capitanAmerica, ironMan];
//organizar en un array
heroes.forEach((heroe, indice) => {
    console.log(`\nInformación del héroe ${indice + 1}:`);
    console.log('Nombre:', heroes.nombre);
    console.log('Nick:', heroes.nick);
});

//muestra información del objeto
console.log(heroes.nombre);


//object keys
//clave : valor

let keys= Object.keys(heroes)
//muestra información del objeto
keys.forEach(function(key) {
    console.log(key + ': ' + heroes[key]);
  });

  let tamaño=Object.keys.length
  console.log(`datos que contiene ${tamaño}`);

