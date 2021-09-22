import { createStore } from 'vuex'

export default createStore({
  state: {
    minutos:0,
    segundos:0,
    milesimas:0,
    cronometro:0,
    conteo:0,
    registro:[" "]
  },
  mutations: {
    iniciarConteo(state, bandera){
      if(bandera==1 && state.conteo==0 ){
        state.conteo=1;
        state.cronometro = setInterval(proceso, 16.66666666);
        function proceso(){
            state.milesimas++;
            if(state.milesimas==60){
                state.segundos++;
                state.milesimas=0;
            }
            if(state.segundos==60){
                state.minutos++;
                state.segundos=0;
            }
            if(state.minutos==60){
                state.minutos=0;
            }
        }
      }else if(bandera==0){
        clearInterval(state.cronometro);
        state.conteo=0;
      }else if (bandera ==2){
        clearInterval(state.cronometro);
        state.conteo=0;
        let historial = state.minutos + " : "+ state.segundos + " : " + state.milesimas;
        
        state.registro.push(historial);
        state.registro.push("<br>");
        state.minutos=0;
        state.segundos=0;
        state.milesimas=0;
        document.getElementById("parrafo").innerHTML= minutos + " : "+ segundos+ " : "+milesimas;
        document.getElementById("historial").innerHTML= registro;
    }
    }
  },
  actions: {
  },
  modules: {
  }
})
