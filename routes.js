var model = require('./models/client');
var service = require('./service');

exports.getAll = function(req, res, next) {
	model.find(function(err, docs) {
		if(err) return res.send(500, err.message);
		res.status(200).json(docs);
	});
};

exports.register = function(req, res, next) {
	var client = {name: 'demo', password: 'demo'};
	model.create(client, function(err, doc) {
		if (err) return res.send(500, err.message);
		res.status(201).json(doc);
	});
};

exports.authenticate = function(req, res, next) {
	// find the user
	model.findOne({ name: req.body.name }, function(err, user) {
		if (err) throw err;

		if (!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {

			// check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {
				// return the information including token as JSON
				res.json({ success: true, message: 'Enjoy your token!', token: service.generateToken(user) });
			}
		}
	});
};

exports.private = function(req, res, next) {
	var token = req.headers.authorization.split(" ")[1];
	res.json({ message: 'You are authenticated. Your _id is: ' + req.user.id + ' and your name is: ' + req.user.name });
};
