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
  
  function agregarPersona() {
    const nombre = prompt("Nombre:");
    const cedula = prompt("Número de Identificación (Cédula):");
    const fechaNacimiento = prompt("Fecha de Nacimiento:");
    const correo = prompt("Correo Electrónico:");
    const ciudadResidencia = prompt("Ciudad de Residencia:");
    const ciudadOrigen = prompt("Ciudad de Origen:");
  
    const persona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);
  
    for (let i = 0; i < 3; i++) {
      const artista = prompt(`Artista de la canción ${i + 1}:`);
      const titulo = prompt(`Título de la canción ${i + 1}:`);
      persona.agregarCancionFavorita(artista, titulo);
    }
  
    personas.push(persona);
    alert("Persona agregada con éxito.");
  }
  
  function mostrarInformacionPersona() {
    if (personas.length === 0) {
      alert("No hay personas registradas.");
      return;
    }
  
    const index = parseInt(prompt("Ingrese la posición de la persona que desea ver (1, 2, ...):")) - 1;
    if (index >= 0 && index < personas.length) {
      personas[index].mostrarInformacion();
    } else {
      alert("Posición no válida.");
    }
  }
  
  while (true) {
    const opcion = prompt("Menú:\n1. Agregar una persona\n2. Mostrar información de una persona\n3. Salir");
  
    switch (opcion) {
      case "1":
        agregarPersona();
        break;
      case "2":
        mostrarInformacionPersona();
        break;
      case "3":
        alert("Gracias por utilizar el programa.");
        break;
      default:
        alert("Opción no válida.");
    }
  
    if (opcion === "3") {
      break;
    }
  }
  