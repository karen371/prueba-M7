<template>
  <div>
    <h1>Componente hijo</h1>
    <input v-model="text" placeholder="Escribe algo" id="input" />
    <button @click="sendText" id="enviar">Enviar</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    sendText() {
      this.$emit('send-text', this.text); 
      this.text = ''; 
    }
  }
}
</script>
  