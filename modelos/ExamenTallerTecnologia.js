const mongoose = require('mongoose');

// Definir el esquema de la laptop
const laptopSchema = new mongoose.Schema({
    id_laptop: { type: Number, required: true }, // Identificador único de la laptop
    marca: { type: String, required: true }, // Marca de la laptop (ejemplo: Lenovo, HP, Dell, etc.)
    modelo: { type: String, required: true }, // Modelo de la laptop
    procesador_marca: { type: String, required: true }, // Marca del procesador (ejemplo: Intel, AMD, etc.)
    procesador_modelo: { type: String, required: true }, // Modelo del procesador (ejemplo: Core i7, Ryzen 5, etc.)
    procesador_velocidad: { type: String, required: true }, // Velocidad del procesador (ejemplo: 2.60 GHz)
    procesador_nucleos: { type: Number, required: true }, // Número de núcleos del procesador
    ram: { type: String, required: true }, // Capacidad de RAM de la laptop (ejemplo: 16 GB)
    almacenamiento_tipo: { type: String, required: true }, // Tipo de almacenamiento (ejemplo: SSD, HDD, etc.)
    almacenamiento_capacidad: { type: String, required: true }, // Capacidad de almacenamiento (ejemplo: 512 GB)
    tamanio_pantalla: { type: String, required: true }, // Tamaño de la pantalla (ejemplo: 14 pulgadas)
    tarjeta_grafica: { type: String, required: true }, // Tarjeta gráfica de la laptop
    sistema_operativo: { type: String, required: true }, // Sistema operativo instalado en la laptop
    precio: { type: Number, required: true }, // Precio de venta de la laptop
    cantidad_disponible: { type: Number, required: true } // Cantidad disponible en inventario
});
// Crear el modelo de la laptop

const LaptopModel = mongoose.model('ExamenTallerTecnologia', laptopSchema,'ExamenTallerTecnologia');
module.exports = LaptopModel;