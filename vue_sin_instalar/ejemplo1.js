

Vue.component('saludo',{
    template:'<h1>Hola Muchachos</h1>',
});




Vue.component('saludo1',{
    template:'<h1>{{saludo2}}</h1>',
    data(){
        return{
            saludo:'Como estan muchachos',
            saludo2:'Muy bien'
        }
    }
});

Vue.component('saludo2',{
    template://html 
    ` 
    <div>
        <ul>
            <li><a href="https://www.flaticon.es/">{{saludo}}</a></li>
            <li><a href="Css_6.html">{{saludo1}}</a></li>
            <li><a href="Formato_5.html">{{saludo2}}</a></li>
            <li><a href="Estilos_4.html">{{saludo3}}</a></li>
        </ul>
    </div>
    `,
    data(){
        return{
            saludo:'Home',
            saludo1:'News',
            saludo2:'Contact',
            saludo3:'About'
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

/* Vue.component('padre',{
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
    
}); */

/* Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo</h4>
    </div>
    `,
    
}); */

/* Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{numero}}</h4>
    </div>
    `,
    props:['numero']
    
}); */

// COMUNICACION ENTRE EL HIJO AL PADRE

Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente padre {{numeropadre}}</h2>
        <button class="bnt btn-danger" @click="numeropadre++">+</button>
        {{nombrepadre}}
        <hijo :numero="numeropadre" @nombrehijo="nombrepadre = $event"></hijo>
    </div>
    `,
    data(){
        return{
            numeropadre:0,
            nombrepadre:''
        }
    }
    
});

Vue.component('hijo',{
    template://html 
    `
    <div class="p-5 bg-dark">
        <h4>Componente hijo  {{numero}}</h4>
        <h4>nombre: {{nombre}}</h4>
        <button @click="numero++">+</button>
    </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre:'Jaime'
        }
    },

    mounted() {
        this.$emit('nombrehijo', this.nombre);
    },
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

