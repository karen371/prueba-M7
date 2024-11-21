module.exports = {
  "Pruebas del Componente Hijo y Padre": {
    "Debe emitir el evento 'send-text' con el texto ingresado": (browser) => {
      browser
        .url("http://localhost:8082") // Cambia esta URL si es necesario
        .waitForElementVisible("body")
        .assert.visible("h1") // Verifica que la página cargó
        .assert.containsText("h1", "Componente hijo") // Verifica el encabezado del hijo
        .setValue("#input", "Texto desde el hijo") // Ingresa texto en el input
        .click("#enviar") // Haz clic en el botón enviar
        .assert.value("#input", "") // Verifica que el input se vació
        .end(); // Finaliza la sesión del navegador aquí si no deseas continuar en la misma.
    },
    "Debe manejar el evento 'send-text' y actualizar el texto recibido": (browser) => {
      browser
        .url("http://localhost:8082") // Cambia esta URL si es necesario
        .waitForElementVisible("body")
        .assert.visible("h1") // Verifica que la página cargó
        .assert.containsText("h1", "Componente Padre") // Verifica el encabezado del padre
        .setValue("#input", "Texto desde el hijo") // Ingresa texto en el input del hijo
        .click("#enviar") // Haz clic en el botón enviar
        .assert.containsText("#recivido", "Texto desde el hijo") // Verifica que el texto fue actualizado en el padre
        .end(); // Finaliza la sesión aquí
    },
  },
};
