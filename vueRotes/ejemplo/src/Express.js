// modulo requerido que se agrega con npm i express dentro de los paquetes de node
const express = require("express");
// se utiliza el modulo dentro de la variable app
const app = express();
// se establece el puerto
const port = 3000;


app.use(express.static("C:\Users\Jaime Pelaez\Desktop\Misión_tic_2022\ciclo3\materialdeapoyo\vueRotes\ejemplo\public\index.html"));

// se le indica al servididor http que estemos escuchando el puerto 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });