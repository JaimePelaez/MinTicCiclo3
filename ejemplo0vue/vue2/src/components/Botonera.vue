<template>
    <div class="container">
        <button class="btn  btn-primary" @click="iniciarConteo(1)">Contar </button>
        <button class="btn  btn-primary" @click="iniciarConteo(0)">Pausa </button>
        <button class="btn  btn-primary">Borrar</button>
    </div>
</template>

<script>
import{mapState, mapMutations} from 'vuex';
export default {
    name:'Botonera',
    computed:{
        ...mapState([]),
    },

    methods: {
        ...mapMutations(['iniciarConteo'])
    },
}
</script>

<style scoped>
        .parrafo{
            font-size: 60px;
            margin-left: 28%;
            padding-left: 5px;
            border-radius: 100%;
            border: 2px solid teal;
            width: 38%;
            text-align: center;
            background-color: lightgray;
            padding: 20px;
        }
    div{
            margin-left: 25%;
            background-color: lightgray;
            width: 43%;
            padding: 20px;
            border: 2px solid teal;
        }
</style>