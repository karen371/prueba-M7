<script>
export default {

  computed: {
    // Acceder al estado del store (contador)
    contador() {
      return this.$store.state.contador; // Accede al contador del store
    },
  },
  methods: {
    // Llama a las mutaciones del store para incrementar o decrementar
    incrementar() {
      this.$store.commit('incrementar'); // Llama a la mutación 'incrementar'
    },
    decrementar() {
      this.$store.commit('decrementar'); // Llama a la mutación 'decrementar'
    },
  },
};
</script>

<template>
  <section>
    <h1>Contador</h1>
    <div>
      <!--Valor del contador -->
      <div><h2>{{ contador }}</h2></div>
      <div>
        <!-- Botones para incrementar y decrementar -->
        <button @click="incrementar" id="incrementar">Incrementar</button>
        <button @click="decrementar" id="decrementar">Decrementar</button>
      </div>
    </div>
  </section>
</template>
