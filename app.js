var express = require('express');
var mongoose = require('../mongoose/lib');
var bodyParser = require('body-parser');
var app = express();

var middleware = require('./middleware');
var service = require('./service');

global.db = mongoose.createConnection('mongodb://localhost/clients');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var routes = require('./routes');
app.get('/', middleware.ensureAuthenticated, routes.getAll);
app.post('/register', routes.register);
app.post('/authenticate', routes.authenticate);
app.get('/private', middleware.ensureAuthenticated, routes.private);

app.listen(8000, function() {
	console.log('listening on http://localhost:8000');
});
