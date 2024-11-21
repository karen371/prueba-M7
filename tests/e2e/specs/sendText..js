module.exports = {
  'Test de comunicación entre Parent y Child': function (browser) {
    browser
      .url('http://localhost:8082')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('p', 5000) // Espera que el elemento <p> sea visible

      // Verifica que el texto recibido en Parent esté vacío al inicio
      .assert.containsText('#recivido', 'Texto recibido del hijo: ')

      // Ingresa texto en el input del Child
      .setValue('input', 'Hola desde Child')

      // Da clic en el botón de Child para enviar el texto al Parent
      .click('#enviar')

      // Pausa por un momento para asegurar que Vue renderice el cambio
      .pause(1000)  // Pausa de 1 segundo

      // Verifica que el Parent haya recibido el texto y lo muestre en el <p>
      .assert.containsText('#recivido', 'Texto recibido del hijo: Hola desde Child')

      .end();
  }
};
