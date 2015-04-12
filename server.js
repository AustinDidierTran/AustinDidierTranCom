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

var connaissancesSchema = mongoose.Schema({
   
   name: String,
   picture: String,
   description: String
    
});

var connaissanceModel = mongoose.model('Connaissance', connaissancesSchema);

mongoose.connect('mongodb://AustinDidierTran:Salut123@ds033639.mongolab.com:33639/personalwebsite');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error...'));

var Connaissance = require('mongoose').model('Connaissance');

var getConnaissances = function(req, res){

    Connaissance.find({}).exec(function(err, collection){
        res.send(collection);
    })
}

db.once('open', function () {
    console.log('Personal website db opened');
});

app.get('/connaissances', getConnaissances);

app.use(stylus.middleware(
    {
        src: rootPath + '/public',
        compile: compile
    }
));

app.use(express.static(rootPath + '/public'));

app.get('/partials/*', function(req, res) {
    console.log('Rendering partial...');
        res.render(__dirname + '/public/views/' + req.params[0]);
});
    
app.get('*', function(req, res) {
    res.render('index');
});

app.listen(process.env.PORT);