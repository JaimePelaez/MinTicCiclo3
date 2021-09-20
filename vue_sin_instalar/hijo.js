Vue.component('hijo',{
    template://html 
    `
    <div p-5 bg-succes>
        <h1>Componente hijo</h1>   
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