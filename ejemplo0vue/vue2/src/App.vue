<template>
  <div>
    <crono></crono>
    <botonera></botonera>
    <historial></historial>

  </div>
  
</template>

<script>
import Botonera from './components/Botonera.vue'
import Historial from './components/Historial.vue'
import Crono from './components/Crono.vue'

export default {
  name: 'App',
  components: {
    Botonera,
    Historial,
    Crono
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

button{
  font-size: 20px;
  margin-left: 2%;
}
h2{
  text-align: center;
  margin-top: -4px;
}

</style>
