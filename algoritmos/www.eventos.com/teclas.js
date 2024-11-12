// Capturar el evento keydown
document.addEventListener("keydown", function(event) {
    console.log(`Tecla presionada: ${event.key}`);
    if (event.key === "ArrowUp") {
        console.log("Flecha arriba presionada");
        // Aquí puedes agregar la acción que deseas cuando se presiona la flecha hacia arriba
    }
});

// Capturar el evento keyup
document.addEventListener("keyup", function(event) {
    console.log(`Tecla liberada: ${event.key}`);
    if (event.key === "Enter") {
        console.log("Tecla Enter liberada");
        // Aquí puedes agregar la acción que deseas cuando se suelta la tecla Enter
    }
});