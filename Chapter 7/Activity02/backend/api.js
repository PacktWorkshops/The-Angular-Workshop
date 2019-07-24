const express = require('express');
const passport = require('passport');
const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const path = require('path');
const colors = require('colors');;

const utils = require('./utils');

// use angular.json to config project root
const config = require(process.cwd()+'/angular.json');
const projectRoot = config.projects[config.defaultProject].architect.build.options.outputPath;

const app = express();

// environment
const env = process.argv.includes('--prod') ? 'prod' : 'dev';


// passport

const userDB = new loki(path.join(__dirname, 'db', 'user.json'), {
    adapter: new lfsa(),
    autoload: true,
    autosave: true,
    autosaveInterval: 4000,
});

const sessionDB = new loki(path.join(__dirname, 'db', 'session.json'), {
    autoload: true,
    autosave: true,
    autosaveInterval: 4000
});


function getUserCollection() {
    let users = userDB.getCollection('users');
    if (users === null) {
        users = userDB.addCollection('users');
        console.log('Database was created'.green);
    }
    return users;
}

function getSessionCollection() {
    let sessions = sessionDB.getCollection('sessions');
    if (sessions === null) {
        sessions = sessionDB.addCollection('sessions');
        console.log('Session database was created'.green);
    }
    return sessions;
}
  
  

passport.serializeUser(function(user, done) {
    return done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    const users = getUserCollection();
    const user = utils.first(users.find({ id }));
    if (id === user.id) {
      return done(null, user);
    }
});


// handle json
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(require('express-session')(
    { secret: 'foo', 
      resave: false, 
      saveUninitialized: true,
      cookie: { secure: 'auto' } ,
      maxAge: null
    }
));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/api'));


// error handler 
app.use(function (err, req, res, next) {
    console.log(err.stack, err);
    res.status(500).send('Something broke!')
})

module.exports = app;