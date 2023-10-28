const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const personas = [];

function agregarPersona() {
  const persona = {};
  rl.question("Nombre: ", (nombre) => {
    persona.nombre = nombre;
    rl.question("Número de Identificación (Cédula): ", (cedula) => {
      persona.cedula = cedula;
      rl.question("Fecha de Nacimiento: ", (fechaNacimiento) => {
        persona.fechaNacimiento = fechaNacimiento;
        rl.question("Correo Electrónico: ", (correo) => {
          persona.correo = correo;
          rl.question("Ciudad de Residencia: ", (ciudadResidencia) => {
            persona.ciudadResidencia = ciudadResidencia;
            rl.question("Ciudad de Origen: ", (ciudadOrigen) => {
              persona.ciudadOrigen = ciudadOrigen;
              persona.cancionesFavoritas = [];
              agregarCanciones(persona);
            });
          });
        });
      });
    });
  });
}

function agregarCanciones(persona) {
  const artista = persona.cancionesFavoritas.length + 1;
  rl.question(`Artista de la canción ${artista}: `, (nombreArtista) => {
    rl.question(`Título de la canción ${artista}: `, (tituloCancion) => {
      persona.cancionesFavoritas.push({ artista: nombreArtista, titulo: tituloCancion });
      if (persona.cancionesFavoritas.length < 3) {
        agregarCanciones(persona);
      } else {
        personas.push(persona);
        console.log("Persona agregada con éxito.");
        mostrarMenu();
      }
    });
  });
}

function guardarInformacionEnArchivo() {
  const dataToSave = JSON.stringify(personas, null, 2);
  fs.writeFile("personas.txt", dataToSave, (err) => {
    if (err) {
      console.error("Error al guardar la información en el archivo.");
    } else {
      console.log("Información guardada en el archivo personas.txt.");
    }
  });
}

function mostrarInformacionPersona() {
  if (personas.length === 0) {
    console.log("No hay personas registradas.");
    mostrarMenu();
  } else {
    console.log("Personas registradas:");
    personas.forEach((persona, index) => {
      console.log(`${index + 1}. ${persona.nombre}`);
    });
    rl.question("Ingrese el número de la persona que desea ver: ", (numeroPersona) => {
      const index = parseInt(numeroPersona) - 1;
      if (index >= 0 && index < personas.length) {
        console.log("Información de la persona:");
        console.log(personas[index]);
        mostrarMenu();
      } else {
        console.log("Número de persona no válido.");
        mostrarMenu();
      }
    });
  }
}

function mostrarMenu() {
  console.log("\nMenú:");
  console.log("1. Agregar una persona");
  console.log("2. Mostrar información de una persona");
  console.log("3. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarPersona();
        break;
      case "2":
        mostrarInformacionPersona();
        break;
      case "3":
        rl.close();
        console.log("Gracias por utilizar el programa.");
        break;
      default:
        console.log("Opción no válida.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
