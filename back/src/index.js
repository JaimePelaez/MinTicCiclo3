// modulo requerido que se agrega con npm i express dentro de los paquetes de node
const express = require("express");
// se utiliza el modulo dentro de la variable app
const app = express();
// se establece el puerto
const port = 3000;
// se indicca el tipo de respuesta cuando el cliente accede a la raiz principal 
app.get("/", (req, res) => {    //rutas o rooter 
  res.send("Hola muchachos como vamos este es el segundo servidor HTTP con Express");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });