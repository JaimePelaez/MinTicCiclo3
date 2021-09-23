/* // modulo requerido que se encuentra dentro de los paquetes de node
const http = require("http");                       

// Creamos el servidor
// donde utilizamos un arrow fuction siendo este un callback, 
// que sirve siempre un request y una respuesta.

const server = http.createServer((req, res) => {
  console.log("Su solicitud será ejecutada...");
  res.end("Hola muchachos como vamos este es el primer servidor HTTP18");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando...");
}); */

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


app.get("/Migente", (req, res) => {   // rutas o rooter 
    res.send("Esto ya es Otra cosa");
  });


// se le indica al servididor http que estemos escuchando el puerto 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/* dentro de las peticiones get podemos responder de 
diversas maneras podemos respnder con archivos json o incluso con archivos estaticos */

/* const express = require("express");
const app = express();
const port = 3000;
// app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {    
    console.log(__dirname);
    res.send("Hola muchachos como vamos este es el segundo servidor HTTP con Express");
});
app.get("/Migente", (req, res) => {
    res.send("Esto ya es Otra cosa");
}); */
/* Middleware
Con express.static podemos especificar la ruta a un archivo estatico
__dirname hace alusión a la ruta que tengamos configurada  */
// app.use(express.static(__dirname + "/public"));

/* app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); */