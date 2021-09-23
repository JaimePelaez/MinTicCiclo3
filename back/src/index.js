// modulo requerido que se agrega con npm i express dentro de los paquetes de node
const express = require("express");
const mongoose = require('mongoose')
// se utiliza el modulo dentro de la variable app
const app = express();
mongoose.connect('mongodb://localhost/datos')
  .then(db => console.log('conectado a base de datos '))
  .catch(err => console.error(err));
// se establece el puerto
const port = 3000;

// middleware
app.use(express.json());

//archivos estaticos
app.use(express.static(__dirname + "/public"));


//Routes
app.use('/tasks', require('./routes/tasks'));
// se indicca el tipo de respuesta cuando el cliente accede a la raiz principal 
app.get("/", (req, res) => {    //rutas o rooter 
  res.send("Hola muchachos como vamos este es el segundo servidor HTTP con Express");
});



// nuestro servidor esta escuchando
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });