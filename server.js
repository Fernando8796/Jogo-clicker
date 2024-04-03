const path = require("path");
const express = require("express");
const app = express();

//Configurações de onde o servidor vai se localizar
const hostname = '192.168.1.9';
const PORT = process.env.PORT || 3000;

//Deixando estático
app.use(express.static(path.join(__dirname, 'public')));

//Pegando rota
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${PORT}`);
});