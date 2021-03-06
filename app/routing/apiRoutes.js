// * A GET route with the url `/api/friends`. This will be used 
//to display a JSON of all possible friends.

//* A POST routes `/api/friends`. This will be used to 
// handle incoming survey results. This route will also be used to 
// handle the compatibility logic. 


var friendList = require('../data/friends.js');
var path = require('path');

//
//ROUTING
//

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

	app.post('/api/friends', function(req, res){
		friendList.push(req.body);
	})
};