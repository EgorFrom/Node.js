var fs = require('fs');

//connecting to local server
var http = require('http');

var server = http.createServer(function(req, res) {
	console.log("Page URL" + req.url);
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});//200 -page found, what date we get?
	var obj = {
		model: 'Audi',
		speed: '234.5',
		wheels: 4
	};
	res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');//port + ip
console.log("We looking at prot 3000");