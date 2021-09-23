import { createStore } from 'vuex'

export default createStore({
  state: {

    frutas:[
      {nombre:"coco",cantidad:0},
      {nombre:"mangostino",cantidad:0},
      {nombre:"zapote",cantidad:0}
    ]

  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },

    borrar(state){
      state.frutas.forEach(elemento => {
        elemento.cantidad=0
      })
    },
    dis(state, index){
      state.frutas[index].cantidad--
    },
  },

  actions: {
  },
  modules: {
  }
})
