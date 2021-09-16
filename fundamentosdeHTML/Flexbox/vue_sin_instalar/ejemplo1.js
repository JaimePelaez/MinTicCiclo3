

Vue.component('saludo',{
    template:'<h1>Hola Muchachos</h1>',
});
Vue.component('saludo1',{
    template:'<h1>{{saludo}}</h1>',
    data(){
        return{
            saludo:'Como estan muchachos'
        }
    }
});
Vue.component('saludo2',{
    template://html 
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3> porque yo me encuentro bien</h3>
    </div>
    `,
    data(){
        return{
            saludo:'Espero que bien'
        }
    }
    
});

Vue.component('contador',{
    template://html 
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
    
});

/* Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre</h2>
        <hijo numero="5"></hijo>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
    
}); */

Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre {{numeropadre}}</h2>
        <button class="bnt btn-danger" @click="numeropadre++">+</button>
        <hijo :numero="numeropadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeropadre:0
        }
    }
    
});

/* Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo</h4>
    </div>
    `,
    
}); */

Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{numero}}</h4>
    </div>
    `,
    props:['numero']
    
});

const app = new Vue({
    el: '#app',
    data:{
        titulo: "Hola muchachos",
        Equipos:[
            {nombre: 'Colombia', titulos: 0},
            {nombre: 'Alemania', titulos: 4},
            {nombre: 'Brazil', titulos: 5}
        ],
        
        x : 5,
        y : 8,
        
        nuevoEquipo:'',
        total:0
    },
    methods:{
        agregarEquipo(){
            this.Equipos.push({
                nombre:this.nuevoEquipo, titulos:0 
            });
            this.nuevoEquipo='';
        }
    },
    computed:{
        sumarCopas(){
            this.total=0;
            for(Equipo of this.Equipos){
                this.total= this.total+ Equipo.titulos;
            }
            return this.total 
        }
    }
})

