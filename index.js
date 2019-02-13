var http = require('http');

var server = http.createServer(function(req, res) {
	console.log("Page URL" + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});//200 -page found, what date we get?
	res.end('Hello, world!');	
});

server.listen(3000, '127.0.0.1');//port + ip
console.log("We looking at prot 3000");