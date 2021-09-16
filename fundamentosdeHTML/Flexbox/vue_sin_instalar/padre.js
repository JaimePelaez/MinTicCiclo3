Vue.component('padre',{
    template://html 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre</h2>
        <hijo></hijo>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
    
})

new Vue({
    el:'#app'
})