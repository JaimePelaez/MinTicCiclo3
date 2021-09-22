<template>
    <div class="container">
        <ul class="list-group list-group-numbered">
            <li v-for="(fruta, index) of ordenarArry" :key="fruta.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold text-start">{{fruta.nombre}}</div>
                </div>
                <span class="badge bg-primary rounded-pill"> {{fruta.cantidad}}  </span>
            </li>
        </ul>
        <button class="btn  btn-danger " @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>
import{mapState, mapMutations} from 'vuex';
export default {
    name:'Lista',
    computed:{
        ...mapState(['frutas']),
        ordenarArry(){
            return this.frutas.sort((a,b)=>b.cantidad-a.cantidad)
        }

    },

    methods: {
        ...mapMutations(['aumentar', 'reiniciar'])
    },
}
</script>