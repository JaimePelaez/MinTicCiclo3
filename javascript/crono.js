let minutos=0;
let segundos=0;
let milesimas=0;
let cronometro=0;
let conteo=0;
var registro=[" "];

function iniciarConteo(bandera){
    if(bandera==1 && conteo==0 ){
        conteo=1;
        cronometro = setInterval(proceso, 16.66666666);
        function proceso(){
            milesimas++;
            if(milesimas==60){
                segundos++;
                milesimas=0;
            }
            if(segundos==60){
                minutos++;
                segundos=0;
            }
            if(minutos==60){
                minutos=0;
            }
            document.getElementById("parrafo").innerHTML= minutos + " : "+ segundos+ " : "+milesimas;
        }
    }else if(bandera==0){
        clearInterval(cronometro);
        conteo=0;
    }else if (bandera ==2){
        clearInterval(cronometro);
        conteo=0;
        let historial = minutos + " : "+ segundos + " : " + milesimas;
        
        registro.push(historial);
        registro.push("<br>");
        minutos=0;
        segundos=0;
        milesimas=0;
        document.getElementById("parrafo").innerHTML= minutos + " : "+ segundos+ " : "+milesimas;
        document.getElementById("historial").innerHTML= registro;
    }
    
}



