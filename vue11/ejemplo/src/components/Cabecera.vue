<template>
    <div class="container">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Frutas</h1>
    </div>
</template>

<script>

import{mapState} from 'vuex';
export default {
    name: 'Cabecera',

    computed:{
        ...mapState(['frutas'])
    },
}
</script>