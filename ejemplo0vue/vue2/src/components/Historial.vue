<template>
    <div class=" historial container">
        <p style="font-size: 30px;"></p>
    </div>
</template>

<script>
import{mapState, mapMutations} from 'vuex';

export default {
    name:'Historial',
    computed:{
        ...mapState([]),
    },

    methods: {
        ...mapMutations([])
    },
}
</script>

<style scoped>
.historial{
            width: 43%;
            border: 2px solid teal;
            margin-top: 10px;
        }

div{
            margin-left: 25%;
            background-color: lightgray;
            width: 43%;
            padding: 20px;
            border: 2px solid teal;
        }


</style>