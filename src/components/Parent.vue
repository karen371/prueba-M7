<template>
  <div>
    <h1>Componente Padre</h1>
    <p id="recivido">Texto recibido del hijo: {{ receivedText }}</p>
    <Child @send-text="handleText"/>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child, // Importamos el componente hijo
  },
  data() {
    return {
      receivedText: "", // Variable para almacenar el texto recibido del hijo
    };
  },
  methods: {
    // Método que recibe el texto del hijo
    handleText(text) {
      this.receivedText = text; // Asignamos el texto recibido al estado
    },
  },
};
</script>
