const express = require('express');
const bodyParser = require('body-parser');
const { calcularFatorial, calcularExponencial } = require('./src/calculadora');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/fatorial', (req, res) => {
    res.sendFile(__dirname + '/public/fatorial.html');
});

app.get('/exponencial', (req, res) => {
    res.sendFile(__dirname + '/public/exponencial.html');
});

app.post('/api/fatorial', (req, res) => {
    const numero = parseInt(req.body.numero);
    const resultado = calcularFatorial(numero);
    res.send({ resultado });
});

app.post('/api/exponencial', (req, res) => {
    const base = parseInt(req.body.base);
    const expoente = parseInt(req.body.expoente);
    const resultado = calcularExponencial(base, expoente);
    res.send({ resultado });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});