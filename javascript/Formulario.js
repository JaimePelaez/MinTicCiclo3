const nombre= document.getElementById("name");
const email= document.getElementById("email");
const pass= document.getElementById("pass");
const form= document.getElementById("form");
const parrafo= document.getElementById("warnings");

form.addEventListener("submit", a=>{
    a.preventDefault()
    let warni= " "
    let expRegEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let bandera = false;
    if(nombre.value.length<6){
        warni+="El nombre no es valido <br>"
        bandera=true;
        console.log("hola")
    }
    if(!expRegEmail.test(email)){
        warni+="El correo no es valido <br>"
        bandera=true;
        console.log("hola1")
    }
    if(pass.value.length<10){
        warni+="La contraseña no valida"
        bandera=true;
        console.log("hola2")
    }
    if(bandera){
        parrafo.innerHTML= warni;
    }
})
