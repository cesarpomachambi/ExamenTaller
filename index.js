const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
// ruta
const EndpoinstsLaptops = require('./Endpoints/EndpointsLaptops');

// configuraciones de environment
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
//manejo de JSON
app.use(express.json());

//CONEXION CON MONGODB\
mongoose.connect(MONGO_URI)
.then(() => {
        console.log('Conexion realizada con EXITO');
        app.listen(PORT, () => {console.log("Servidor express corriendo en el puerto: "+PORT)})
    }
).catch( error => console.log('error de conexion', error));

//utilizar las rutas de recetas
app.use('/inventarios', EndpoinstsLaptops);
