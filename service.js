var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./config');

exports.generateToken = function(user) {
	var payload = {
		sub: {'id': user._id, 'name': user.name},
		iat: moment().unix(), // when the token was created
		exp: moment().add(14, 'days').unix(), // expiration time (today + 14 days)
	};

	return jwt.encode(payload, config.TOKEN_SECRET);
};
