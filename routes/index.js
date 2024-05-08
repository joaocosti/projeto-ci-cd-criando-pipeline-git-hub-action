const { calcularFatorial, calcularExponencial } = require('../src/calculadora');
const express = require('express')
const path = require('path');

const router = express.Router();


router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
});

router.get('/fatorial', (req, res) => {
    const indexPath = path.join(__dirname, '../public/fatorial.html');
    res.sendFile(indexPath);
});

router.get('/exponencial', (req, res) => {
    const indexPath = path.join(__dirname, '../public/exponencial.html');

    res.sendFile(indexPath)
});

router.get('/styles.css', (req, res) => {
    const indexPath = path.join(__dirname, '../public/styles.css');

    res.sendFile(indexPath)
});

router.post('/api/fatorial', (req, res) => {
    const numero = parseInt(req.body.numero);
    const resultado = calcularFatorial(numero);
    res.send({ resultado });
});

router.post('/api/exponencial', (req, res) => {
    const base = parseInt(req.body.base);
    const expoente = parseInt(req.body.expoente);
    const resultado = calcularExponencial(base, expoente);
    res.send({ resultado });
});

module.exports = router;