const express = require('express');
const path = require('path');

// use angular.json to config project root
const config = require(process.cwd()+'/angular.json');
const projectRoot = config.projects[config.defaultProject].architect.build.options.outputPath;

const app = express();

// trigger static hosting of production html with --prod
const env = process.argv.includes('--prod') ? 'prod' : 'dev';

// static files
(env === 'prod') ? app.use('/', express.static(process.cwd() + '/' + projectRoot )) : 
app.use('/', express.static(path.join(__dirname, 'static')));

// redirect fpr spa
 app.get('/', (req, res) => {
    (env === 'prod') ? res.sendFile('index.html', { root: process.cwd() + '/' + projectRoot }) :
    res.sendFile('index.html', { root: path.join(__dirname, 'static') });
});

// error handler 
app.use(function (err, req, res, next) {
    console.log(err.stack, err);
    res.status(500).send('Something broke!')
})

module.exports = app;