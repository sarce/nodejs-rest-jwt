var Schema = require('../../mongoose/lib').Schema;
var modelSchema = Schema({
	name: String,
	password: String,
});

/* global db */
module.exports = db.model('Client', modelSchema);
