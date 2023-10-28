const readline = require('readline');

class Persona {
  constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.fechaNacimiento = fechaNacimiento;
    this.correo = correo;
    this.ciudadResidencia = ciudadResidencia;
    this.ciudadOrigen = ciudadOrigen;
    this.cancionesFavoritas = [];
  }

  agregarCancionFavorita(artista, titulo) {
    if (this.cancionesFavoritas.length < 3) {
      this.cancionesFavoritas.push({ artista, titulo });
    } else {
      console.log("No se pueden agregar más de 3 canciones favoritas.");
    }
  }

  mostrarInformacion() {
    console.log("Nombre:", this.nombre);
    console.log("Cédula:", this.cedula);
    console.log("Fecha de Nacimiento:", this.fechaNacimiento);
    console.log("Correo Electrónico:", this.correo);
    console.log("Ciudad de Residencia:", this.ciudadResidencia);
    console.log("Ciudad de Origen:", this.ciudadOrigen);
    console.log("Canciones Favoritas:");
    this.cancionesFavoritas.forEach((cancion, index) => {
      console.log(`${index + 1}. Artista: ${cancion.artista}, Título: ${cancion.titulo}`);
    });
  }
}

const personas = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function agregarPersona() {
  rl.question("Nombre: ", (nombre) => {
    rl.question("Número de Identificación (Cédula): ", (cedula) => {
      rl.question("Fecha de Nacimiento: ", (fechaNacimiento) => {
        rl.question("Correo Electrónico: ", (correo) => {
          rl.question("Ciudad de Residencia: ", (ciudadResidencia) => {
            rl.question("Ciudad de Origen: ", (ciudadOrigen) => {
              const persona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);

              (function agregarCanciones(i) {
                if (i < 3) {
                  rl.question(`Artista de la canción ${i + 1}: `, (artista) => {
                    rl.question(`Título de la canción ${i + 1}: `, (titulo) => {
                      persona.agregarCancionFavorita(artista, titulo);
                      agregarCanciones(i + 1);
                    });
                  });
                } else {
                  personas.push(persona);
                  console.log("Persona agregada con éxito.");
                  mostrarMenu();
                }
              })(0);
            });
          });
        });
      });
    });
  });
}

function mostrarInformacionPersona() {
  if (personas.length === 0) {
    console.log("No hay personas registradas.");
    mostrarMenu();
    return;
  }

  rl.question("Ingrese la posición de la persona que desea ver (1, 2, ...): ", (posicion) => {
    const index = parseInt(posicion) - 1;
    if (index >= 0 && index < personas.length) {
      personas[index].mostrarInformacion();
      mostrarMenu();
    } else {
      console.log("Posición no válida.");
      mostrarMenu();
    }
  });
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
