const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const cuid = require('cuid');
const path = require('path');

const lines = require('./models/map');

const mapDB = new loki(path.join(__dirname, 'db', 'map.json'), {
    adapter: new lfsa(),
    autoload: true,
    autosave: true,
    autosaveInterval: 4000,
});

function getMapCollection() {
    let maps = mapDB.getCollection('maps');
    if (maps === null) {
        maps = mapDB.addCollection('maps');
        console.log('Map database was created'.green);
    }
    return maps;
}
  


class Map {
    constructor() {}
    init(cb) {
        const maps = getMapCollection();
     
        lines.forEach((line, index) => {
            maps.insert({ ...line, id: index.toString() });
        });
      
        mapDB.saveDatabase(()=>{
            console.log('Map created'.green);
            cb(lines);
        });
    
    }

    getByName(name) {
        const maps = getMapCollection();
        const line = maps.find({ name: name });
        return line;
    }

    getById(id) {
        const maps = getMapCollection();
        const line = maps.find({ id: id });
        return line;
    }

    get(req, res, next) {
        const maps = getMapCollection();
        const lines = maps.chain().data();
        res.status(200).json(lines);
    }

}

module.exports = Map;