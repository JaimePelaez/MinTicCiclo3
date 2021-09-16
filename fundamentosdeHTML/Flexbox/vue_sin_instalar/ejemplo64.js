Vue.component('saludo',{
    template:   `
                <div>
                    <h1>hola muchachos</h1>
                    <h1>hola muchachos</h1>
                </div>`
});

Vue.component('navegacion',{
    template: `
    <div>
        <nav>
            <ul class="container  overflow-hidden list-style-type- none">
                <li style="float:left"><a href="">1</a></li>
                <li style="float:left"><a href="">1</a></li>
                <li style="float:left"><a href="">1</a></li>
                <li style="float:left"><a href="">1</a></li>
            </ul>
        </nav>
    </div>`
});

/* Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
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
    
});  */

Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre {{numeropadre}}+ {{jaime}}</h2>
        <button class="bnt btn-danger" @click="numeropadre++">+</button>
        <hijo :jaime="numeropadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeropadre:{
                arreglo:["jaime","pelaez", "52"],
                arreglo1:["jaime","pelaez", "53"]
            },
            jaime:0
        }
    }
    
});

Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{jaime[1][2]}}</h4>
    </div>
    `,
    props:['jaime']
    
});
const app = new Vue({
    el:'#app',
    data:{
        titulo:"Hola muchachos",
        Equipos:[
            {
                nombre: 'Colombia',
                titulos: 0
            },
            {
                nombre: 'Alemania',
                titulos: 4
            },
            {
                nombre: 'Brazil',
                titulos: 5
            },
            {
                nombre: 'Peru',
                titulos: 0
            },
        ],
        x:10,
        y:5,
        nuevoEquipo:"",
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
        },

        igualar(){

        }
    }
})



