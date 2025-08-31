const fs = require('fs');
const csv = require('csv-parser');
const xml2js = require('xml2js');

class DataManager {
    constructor() {
        this.data = [];
    }

    importJson(filePath) {
        this.data = JSON.parse(fs.readFileSync(filePath));
    }

    importCsv(filePath) {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                this.data.push(row);
            });
    }

    importXml(filePath) {
        const parser = new xml2js.Parser();
        fs.readFile(filePath, (err, data) => {
            parser.parseString(data, (err, result) => {
                this.data = result;
            });
        });
    }

    getData() {
        return this.data;
    }
}

module.exports = DataManager;
