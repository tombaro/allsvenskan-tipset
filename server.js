var express = require('express'),
app = express(),
port = process.env.PORT || 3001,
bodyParser = require('body-parser'),
path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/standingsRoute');
routes(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(port);

console.log('api RESTful API server started on: ' + port);