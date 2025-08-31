const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const DataManager = require('./dataManager');

const app = express();
const manager = new DataManager();
app.use(bodyParser.json());

app.post('/import/json', (req, res) => {
    manager.importJson(req.body.filePath);
    res.send('Fichier JSON importé avec succès.');
});

app.get('/data', (req, res) => {
    res.json(manager.getData());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
