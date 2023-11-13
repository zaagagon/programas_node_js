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
heroes.forEach((heroe, indice) => {
    console.log(`\nInformación del héroe ${indice + 1}:`);
    console.log('Nombre:', heroe.nombre);
    console.log('Nick:', heroe.nick);
});

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

