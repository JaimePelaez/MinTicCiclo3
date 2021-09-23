<template>
    <div class="container">

        <ol class="list-group list-group-numbered">
            <li v-for ="(fruta, index) of orden" :key="fruta.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{fruta.nombre}}</div>
                    <img src="" alt="">
                </div>
                <span class="badge bg-primary rounded-pill">
                    {{fruta.cantidad}} 
                </span>
            </li>
        </ol>
        <br><br>
        <button class="btn btn-primary"  @click="borrar(index)" >Aume </button>
                    
    </div>
</template>

<script>
import { mapMutations, mapState, mutations } from 'vuex'

export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        orden(){
            return this.frutas.sort((a,b)=>b.cantidad-a.cantidad)
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'borrar','dis']),
        
    }
}

</script>

<style scoped>

</style>