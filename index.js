var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('This is home');
});

app.get('/news', function (req, res) {
	res.send('This is news');
});

app.get('/news/:id/:name', function (req, res) {
	res.send('This is news. Id is - ' + req.params.id + req.params.name);
});

app.listen(3000);


