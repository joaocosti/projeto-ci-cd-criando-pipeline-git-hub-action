const express = require('express');
const path = require('path');

const app = express();

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de fatorial
app.get('/factorial', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'factorial.html'));
});

// Rota para a página de exponencial
app.get('/exponential', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exponential.html'));
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
