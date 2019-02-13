var fs = require('fs');

//connecting to local server
var http = require('http');

var server = http.createServer(function(req, res) {
	console.log("Page URL" + req.url);
	if (req.url === '/index' || req.url === '/')
	{
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});//200 -page found, what date we get?
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/about') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});//200 -page found, what date we get?
		fs.createReadStream(__dirname + '/about.html').pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});//200 -page found, what date we get?
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000, '127.0.0.1');//port + ip
console.log("We looking at prot 3000");