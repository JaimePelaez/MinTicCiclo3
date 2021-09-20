const app = new Vue({
    el:'#app',
    data:{
        titulo:"Hola muchachos",
        Equipos:[
            {nombre:'Colombia',titulos:0},
            {nombre:'Alemania',titulos:4},
            {nombre:'brazil',titulos:5}
            /* {ciudades:[
                {nombre:'Colombia',titulos:0},
                {nombre:'Alemania',titulos:4},
                {nombre:'brazil',titulos:5},
            ]} */

        ],

        x : 5,
        y : 8,
        nuevoEquipo:'',
        total:0
    },
    methods:{
        agregarEquipo(){
            this.Equipos.push(
                {nombre:this.nuevoEquipo, titulos:0 }
                
                );
            this.nuevoEquipo='';
        },
        funcioncomer(){
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

