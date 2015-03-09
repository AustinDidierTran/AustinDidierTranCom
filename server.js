var express = require('express'),
    app = express(),
    stylus = require('stylus'),
    path = require('path'),
    rootPath = path.normalize(__dirname),
    mongoose = require('mongoose');

var compile = function(str, path) {
    return stylus(str).set('filename', path);
}

app.set('view engine', 'jade');

app.use(stylus.middleware(
    {
        src: rootPath + '/public',
        compile: compile
    }
));

app.use(express.static(rootPath + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(process.env.PORT);