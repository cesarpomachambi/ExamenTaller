const express = require('express');
const Endpoints = express.Router();
const LaptopModel = require('../modelos/ExamenTallerTecnologia');

// Obtener todas las laptops
Endpoints.get('/Tlaptops', async (req, res) => {
    try {
        const laptops = await LaptopModel.find();
        if (laptops.length === 0) {
            return res.status(404).json({ error: 'NoDataFound', message: 'No se encontraron laptops.' });
        }
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener todas las laptops', details: error.message });
    }
});

// Obtener una laptop por su ID
Endpoints.get('/laptops/:id', async (req, res) => {
    try {
        const laptop = await LaptopModel.findById(req.params.id);
        if (!laptop) {
            return res.status(404).json({ error: 'NotFound', message: 'No se encontró ninguna laptop con el ID proporcionado' });
        }
        res.json(laptop);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener la laptop por ID', details: error.message });
    }
});

// Crear una nueva laptop
Endpoints.post('/laptops', async (req, res) => {
    const laptop = new LaptopModel(req.body);
    try {
        const nuevaLaptop = await laptop.save();
        res.status(201).json(nuevaLaptop);
    } catch (error) {
        res.status(400).json({ error: 'BadRequest', message: 'Error al crear una nueva laptop', details: error.message });
    }
});

// Actualizar una laptop por su ID
Endpoints.put('/laptops/:id', async (req, res) => {
    try {
        const laptop = await LaptopModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!laptop) {
            return res.status(404).json({ error: 'NotFound', message: 'No se encontró ninguna laptop con el ID proporcionado' });
        }
        res.json(laptop);
    } catch (error) {
        res.status(400).json({ error: 'BadRequest', message: 'Error al actualizar la laptop por ID', details: error.message });
    }
});

// Eliminar una laptop por su ID
Endpoints.delete('/laptops/:id', async (req, res) => {
    try {
        const laptop = await LaptopModel.findByIdAndDelete(req.params.id);
        if (!laptop) {
            return res.status(404).json({ error: 'NotFound', message: 'No se encontró ninguna laptop con el ID proporcionado' });
        }
        res.json({ message: 'Laptop eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al eliminar la laptop por ID', details: error.message });
    }
});

// Consultar laptops por marca
Endpoints.get('/marca/:marca', async (req, res) => {
    const { marca } = req.params;
    try {
        const laptops = await LaptopModel.find({ marca });
        if (laptops.length === 0) {
            return res.status(404).json({ error: 'NoDataFound', message: 'No se encontraron laptops de la marca proporcionada.' });
        }
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener laptops por marca', details: error.message });
    }
});


// Consultar laptops por sistema operativo
Endpoints.get('/sistema_operativo/:sistema_operativo', async (req, res) => {
    const { sistema_operativo } = req.params;
    try {
        const laptops = await LaptopModel.find({ sistema_operativo });
        if (laptops.length === 0) {
            return res.status(404).json({ error: 'NoDataFound', message: 'No se encontraron laptops con el sistema operativo proporcionado.' });
        }
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener laptops por sistema operativo', details: error.message });
    }
});
// Consultar por rango de precios 
Endpoints.get('/laptops/precio/:min/:max', async (req, res) => {
    const { min, max } = req.params;
    try {
        const laptops = await LaptopModel.find({ precio: { $gte: min, $lte: max } });
        if (laptops.length === 0) {
            return res.status(404).json({ error: 'NoDataFound', message: 'No se encontraron laptops dentro del rango de precios proporcionado.' });
        }
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener laptops por rango de precios', details: error.message });
    }
});

//Consultar laptops con un sistema operativo determinado y precio menor que un valor dado
Endpoints.get('/laptops/sistema_operativo/:sistema_operativo/:maxPrice', async (req, res) => {
    const { sistema_operativo, maxPrice } = req.params;
    try {
        const laptops = await LaptopModel.find({ 
            sistema_operativo: sistema_operativo,
            precio: { $lt: maxPrice } 
        });
        if (laptops.length === 0) {
            return res.status(404).json({ error: 'NoDataFound', message: 'No se encontraron laptops con el sistema operativo y precio proporcionados.' });
        }
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener laptops por sistema operativo y precio', details: error.message });
    }
});

// Ordenar del menor al mayor precio
Endpoints.get('/laptops/ordenar/precio_asc', async (req, res) => {
    try {
        const laptops = await LaptopModel.find().sort({ precio: 1 });
        if (laptops.length === 0) {
            return res.status(404).json({ error: 'NoDataFound', message: 'No se encontraron laptops para ordenar por precio.' });
        }
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ error: 'ServerError', message: 'Error al obtener laptops ordenadas por precio ascendente', details: error.message });
    }
});

module.exports = Endpoints;