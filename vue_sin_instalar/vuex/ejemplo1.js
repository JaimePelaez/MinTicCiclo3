Vue.component('titulo',{
    template:`<div>
                <h1>{{titulo}}:{{$store.state.numero}}</h1>
                <boton></boton>
            </div>`,
    data(){
        return{
            titulo:'Los numeros son',
            
        }
    }
});



Vue.component('boton',{
    template://html
            `<div>
                <button @click="$store.commit('incrementar')">+</button>
                <h4>{{$store.state.numero}}</h4>
            </div>`,
    data(){
        return{
            titulo:'Los numeros son',
            
        }
    }
});

/* Vue.component('titulo',{
    template:`<div>
                <h1>{{titulo}}:{{numero}}+{{numero1}}</h1>
                <boton></boton>
            </div>`,
    data(){
        return{
            titulo:'Los numeros son',
            
        }
    },
    computed:{

        numero(){
            return store.state.numero
        },
        numero1(){
            return store.state.numero1
        }
        // ...Vuex.mapState(['numero','numero1'])
    }
}); */


/*
Vue.component('boton',{
    template://html
            `<div>
                <button @click="incrementar">+</button>
                <h4>{{numero}}</h4>
            </div>`,
    computed:{
        ...Vuex.mapState(['numero','numero1'])
    },
    methods: {
        ...Vuex.mapMutations(['incrementar'])
    },
}); */



/* Vue.component('boton',{
    template://html
            `<div>
                <button @click="incrementar">+</button>
                <button @click="obtenerMaterias">Mostrar Materias</button>
                <ul v-for="materia of materias">
                <li>{{materia.nombre}}</li>
                </ul>
            </div>`,
    computed:{
        ...Vuex.mapState(['numero','numero1','materias'])
    },
    methods: {
        ...Vuex.mapMutations(['incrementar']),
        ...Vuex.mapActions(['obtenerMaterias'])
    },
}); */

/* UNA NUEVA INSTANCIA DE VUEX
va hacer un objeto con toda la configuración que tambien 
que debemos llamar en la instancia vuex dentro de la instancia de vue*/
const store = new Vuex.Store({
    // Lo primero que se hace es crear un estado
    state: {
        // Este dato numero se vuelve disponible para todos los componentes de vue
        numero: 0,
        numero1:10,
        materias:[]
    },
    // Las mutaciones son metodos que permiten el manejo de las variables state
    mutations: {
        incrementar (state) {
        state.numero++
        },
        mostrarMaterias(state, materiasAccion){
            state.materias=materiasAccion
        }
    },
    /* Una mamera de utilizar los actions son con los async y await 
    ya que los fetch devuelven promesas */
    actions:{
        obtenerMaterias:async function({commit}){
            const datos = await fetch ('materias.json');
            // await data.jason devuelve lo que contiene nuestra extensión   json en forma de objeto 
            const materias = await datos.json();
            console.log(materias);
            commit('mostrarMaterias',materias);
        }
    } 
})

const app = new Vue({
    el: '#app',
    store:store
})