var express = require('express'),
app = express(),
port = 3000,
bodyParser = require('body-parser'),
path = require('path'),
ejs = require('ejs'),
axios = require('axios');

//Domain where API is hosted:
var domain = 'http://localhost:3000';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


var routes = require('./api/routes/standingsRoute');
var standings = require('./api/controllers/standingsController');
routes(app);

app.use(express.static(path.join(__dirname, 'public')));

// Serve index page
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + './public/index.html'));
});

var asData = {};
var elData = {};
var dasData = {};
var seData = {};

axios.get(domain + '/as')
    .then(function(res){asData = res.data;})
    
axios.get(domain + '/el')
    .then(function(res){elData = res.data;})
    
axios.get(domain + '/das')
    .then(function(res){dasData = res.data;})
    
axios.get(domain + '/se')
    .then(function(res){seData = res.data;})


app.get('/allsvenskan', function(req,res){
    res.render('tabell', {data: asData})
})

app.get('/elitettan', function(req,res){
    res.render('tabell', {data: elData})
})

app.get('/damallsvenskan', function(req,res){
    res.render('tabell', {data: dasData})
})

app.get('/superettan', function(req,res){
    res.render('tabell', {data: seData})
})

app.get('/allsvenskanbw', function(req,res){
    res.render('bw', {data: asData})
})

app.listen(port);

console.log('api RESTful API server started on: ' + port);