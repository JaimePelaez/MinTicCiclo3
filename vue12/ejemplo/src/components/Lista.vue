<template>
    <div class="container text-center">
        <ol class="list-group list-group-numbered">
            <li v-for ="(fruta, index ) of orden" @click="aumentar(index)" :key="fruta.id" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{fruta.nombre}}</div>
                </div>
                <span class="badge bg-primary rounded-pill">{{fruta.cantidad}}</span>
            </li>
        </ol>
        <button @click="borrar" class="btn btn-danger">Borrar</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        orden(){
            return this.frutas.sort((a,b)=>b.cantidad-a.cantidad)
        }

    },
    methods:{
        ...mapMutations(['aumentar','borrar'])
    }

}
</script>

<style scoped>
h1{
    
    color: red;
}
</style>