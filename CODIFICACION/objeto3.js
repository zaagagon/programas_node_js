// Crear un objeto libro
var libro = {
    titulo: 'JavaScript: The Good Parts',
    autor: 'Douglas Crockford',
    paginas: 172,
  
    // Método para mostrar información del libro
    mostrarInfo: function() {
      console.log("Título: " + this.titulo);
      console.log("Autor: " + this.autor);
      console.log("Páginas: " + this.paginas);
    },
  
    // Método para aumentar el número de páginas
    aumentarPaginas: function(cantidad) {
      this.paginas += cantidad;
      console.log("Se añadieron " + cantidad + " páginas. Nuevo total de páginas: " + this.paginas);
    }
  };
  
  // Mostrar información del libro
  libro.mostrarInfo();
  
  // Aumentar el número de páginas
  libro.aumentarPaginas(10);
  