<template>
    <div class=" parrafo container">
        <p style="font-size: 30px;">{{minutos}} : {{segundos}} : {{milesimas}}</p>
    </div>
</template>

<script>
import{mapState, mapMutations} from 'vuex';

export default {
    name:'Crono',
    computed:{
        ...mapState(['minutos','segundos', 'milesimas']),
    },

    methods: {
        ...mapMutations([])
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
</style>