<template>
    <div>
      <cabecera></cabecera>
      <lista></lista>
    </div>  
</template>

<script>
import Lista from './components/Lista.vue'
import Cabecera from './components/Cabecera.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
