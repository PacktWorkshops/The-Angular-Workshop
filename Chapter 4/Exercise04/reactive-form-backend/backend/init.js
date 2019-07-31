const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const path = require('path');
const colors = require('colors');

const Session = require('./auth');
const Map = require('./map');
const Train = require('./train');
const adapter = new lfsa();
let tick = 0;

const userDB = new loki(path.join(__dirname, 'db', 'user.json'), { 
    adapter : adapter,
    autoload: true,
    autoloadCallback : userInitialize,
    autosave: false
});


const mapDB = new loki(path.join(__dirname, 'db', 'map.json'), {
    adapter : adapter,
    autoload: true,
    autosave: false,
    autoloadCallback : mapInitialize
});


const trainDB = new loki(path.join(__dirname, 'db', 'train.json'), {
    adapter : adapter,
    autoload: true,
    autosave: false,
    autoloadCallback : trainInitialize
});


function complete() {
    if (tick === 3) {
        process.exit(0);
    }
}

function userInitialize() {

    const sessionController = new Session()
    sessionController.init(() => {
        tick++;
        complete();
    });

}

function mapInitialize() {
    const trainController = new Train();
    const mapController = new Map();
    mapController.init((maps) => {
        tick++;
        complete();
        trainController.init(maps,() => {
            tick++;
            complete();
        });
    });

}

function trainInitialize() {



}