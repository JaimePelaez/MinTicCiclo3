import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas:[
      {nombre:'coco',cantidad:0},
      {nombre:'mangostinos',cantidad:0},
      {nombre:'zapote',cantidad:0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    borrar(state){
      state.frutas.forEach(puerta=>{
        puerta.cantidad=0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
