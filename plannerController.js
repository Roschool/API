const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/afspraken.json');

function leesAfspraken() {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
}

function schrijfAfspraken(afspraken) {
    fs.writeFileSync(dataPath, JSON.stringify(afspraken, null, 2), 'utf8');
}

function getAfspraken(req, res) {
    const afspraken = leesAfspraken();
    res.json(afspraken);
}

function voegAfspraakToe(req, res) {
    const nieuweAfspraak = req.body;
    const afspraken = leesAfspraken();
    
    nieuweAfspraak.id = afspraken.length + 1;
    afspraken.push(nieuweAfspraak);
    
    schrijfAfspraken(afspraken);
    res.status(201).json({ message: 'Afspraak toegevoegd', afspraak: nieuweAfspraak });
}

module.exports = {
    getAfspraken,
    voegAfspraakToe,
};
