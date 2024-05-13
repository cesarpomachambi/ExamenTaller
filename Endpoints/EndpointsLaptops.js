const express = require('express');
const Endpoints = express.Router();
const LaptopModel = require('../modelos/ExamenTallerTecnologia');

// Obtener todas las laptops
Endpoints.get('/laptops', async (req, res) => {
    try {
        const laptops = await LaptopModel.find();
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener una laptop por su ID
Endpoints.get('/laptops/:id', async (req, res) => {
    try {
        const laptop = await LaptopModel.findById(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop no encontrada' });
        }
        res.json(laptop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una nueva laptop
Endpoints.post('/laptops', async (req, res) => {
    const laptop = new LaptopModel(req.body);
    try {
        const nuevaLaptop = await laptop.save();
        res.status(201).json(nuevaLaptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar una laptop por su ID
Endpoints.patch('/laptops/:id', async (req, res) => {
    try {
        const laptop = await LaptopModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop no encontrada' });
        }
        res.json(laptop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar una laptop por su ID
Endpoints.delete('/laptops/:id', async (req, res) => {
    try {
        const laptop = await LaptopModel.findByIdAndDelete(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop no encontrada' });
        }
        res.json({ message: 'Laptop eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = Endpoints;