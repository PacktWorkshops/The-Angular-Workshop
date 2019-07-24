const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const path = require('path');
const colors = require('colors');
const adapter = new lfsa();
let tick = 0;

const userDB = new loki(path.join(__dirname, 'db', 'user.json'), { 
    adapter : adapter,
    autoload: true,
    autoloadCallback : userInitialize,
    autosave: true, 
    autosaveInterval: 4000
});

const sessionDB = new loki(path.join(__dirname, 'db', 'session.json'), {
    adapter : adapter,
    autoload: true,
    autosave: true,
    autoloadCallback : sessionInitialize,
    autosaveInterval: 4000
});

const mapDB = new loki(path.join(__dirname, 'db', 'map.json'), {
    adapter : adapter,
    autoload: true,
    autosave: true,
    autoloadCallback : mapInitialize,
    autosaveInterval: 4000
});

const trainDB = new loki(path.join(__dirname, 'db', 'train.json'), {
    adapter : adapter,
    autoload: true,
    autosave: true,
    autoloadCallback: trainInitialize,
    autosaveInterval: 4000
});

function complete() {
    if (tick === 4) {
        process.exit(0);
    }
}

function userInitialize() {
    const users = userDB.getCollection('users');
    if (users === null) {
        userDB.addCollection('users', { autoupdate: true });
    }
    users.removeDataOnly();
    userDB.saveDatabase(() => {
        console.log('User DB initialized'.green);
        tick++;
        complete();
    });

}

function sessionInitialize() {
    let sessions = sessionDB.getCollection('sessions');
    if (sessions === null) {
        sessions = sessionDB.addCollection('sessions', { autoupdate: true });
    }
    sessions.removeDataOnly();
    sessionDB.saveDatabase(() => {
        console.log('Session DB initialized'.green);
        tick++;
        complete();
    });
}

function mapInitialize() {
    let maps = mapDB.getCollection('maps');
    if (maps === null) {
        maps = mapDB.addCollection('maps', { autoupdate: true });
    }
    maps.removeDataOnly();
    mapDB.saveDatabase(() => {
        console.log('Map DB initialized'.green);
        tick++;
        complete();
    });
}  

function trainInitialize() {
    let trains = trainDB.getCollection('trains');
    if (trains === null) {
        trains = trainDB.addCollection('trains', { autoupdate: true });
    }
    trains.removeDataOnly();
    trainDB.saveDatabase(() => {
        console.log('Train DB initialized'.green);
        tick++;
        complete();
    });
}  