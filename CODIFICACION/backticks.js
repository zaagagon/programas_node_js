const nombre = "Yolis"

console.log(`Hola como estas ${nombre}`);


// usemos variable de entorno NOMBRE
const lastname = process.env.NOMBRE;

// estructura condicional
if (lastname) {
    console.log(`Hola, ${lastname}!`);
} else {
    console.log("No se proporcionó un nombre en la variable de entorno NOMBRE.");
}