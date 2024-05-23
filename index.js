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
    console.log('\x1b[1m\x1b[31m*********Conexion realizada con******EXITO!!!!!*********\x1b[0m');
        app.listen(PORT, () => {console.log("Servidor express corriendo en el puerto: "+PORT)})
    }
).catch( error => console.log('error de conexion', error));

<<<<<<< Updated upstream
//utilizar los endpoints 
=======
//utilizar los Endpoints 
>>>>>>> Stashed changes
app.use('/inventarios', EndpoinstsLaptops);
