<template>
  <div id="app">
    <cabecera></cabecera>
    <lista></lista>
  </div>
</template>

<script>

import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>

