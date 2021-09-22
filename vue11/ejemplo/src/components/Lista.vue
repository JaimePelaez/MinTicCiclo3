<template>
    <div class="container">
        <ul class="list-group list-group-numbered">
            <li v-for= "(fruta, index) of ordenar" @click="aumentar(index)" :key="fruta.id" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{fruta.nombre}}</div>
                </div>
                <span class="badge bg-primary rounded-pill"> {{fruta.cantidad}}</span>
            </li>
        </ul>
        <button @click="borrar" class="btn btn-danger">Borrar</button>
    </div>
</template>

<script>

import{mapState, mapMutations} from 'vuex';

export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        ordenar(){
            return this.frutas.sort((a,b)=>b.cantidad-a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar','borrar']),
    },
}
</script>

<style scoped>
    li{
        color: rgb(216, 26, 26);
    }
</style>