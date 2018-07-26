var Schema = require('mongoose').Schema;
var modelSchema = Schema({
	name: String,
	password: String,
});

/* global db */
module.exports = db.model('Client', modelSchema);
