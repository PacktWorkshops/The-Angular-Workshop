const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const path = require('path');

let User;

const adapter = new lfsa();
const userDB = new loki(path.join(__dirname, 'db', 'user.json'), { 
    adapter : adapter,
    autoload: true,
    autosave: true, 
    autoloadCallback: dbInit,
    autosaveInterval: 4000
});


function dbInit() {
    User = userDB.getCollection('users');
}


module.export = User;