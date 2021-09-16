Vue.component('saludo',{
    template://html
    `<h1>Hola Muchachos</h1>`
});

Vue.component('saludo1',{
    template:'<h1>{{saludo}}</h1>',
    data(){
        return{
            saludo:'Como estan',
            saludo1:'ajjajaajjaja'
        }
    }
});

Vue.component('saludo2',{
    template:`
    <div>
        <h1>{{saludo}}</h1>
        <h3> {{saludo1}}</h3>
    </div>`,
    data(){
        return{
            saludo:'Espero que bien',
            saludo1:'porque yo me encuentro bien'
        }
    }
    
});

/* Vue.component('padre',{
    template://html 
    `
    <div class="container p-5 bg-primary text-white">
        <h2>Componente padre</h2>
        <hijo></hijo>
    </div>
    ` 
});

Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo</h4>
    </div>
    `,
    
}); */

Vue.component('padre',{
    template://html 
    `
    <div class="container p-5 bg-primary text-white">
        <h2>Componente padre {{numeropadre}}</h2>
        <button class="bnt btn-danger" @click="numeropadre++">+</button>
        <hijo :jaime="numeropadre[2]"></hijo>
    </div>
    `,
    data(){
        return{
            numeropadre:["jaime","pelaez","delgado"]
        }
    }
    
});

Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{jaime}}</h4>
    </div>
    `,
    props:['jaime']
    
});


const app = new Vue({
    el:'#jaime',
    data:{
        titulo:"Hola muchachos",
        Equipos:[
            {
                nombre:{
                    nombre2:'Colombia', 
                },
                titulos:0
            },
            {
                nombre:'china', 
                titulos:4
            },
            {
                nombre:'brazil', 
                titulos:5
            },
            {
                nombre:'peru', 
                titulos:0
            }
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
        },


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


