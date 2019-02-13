var fs = require('fs');

var myReadShort = fs.CreateReadStream(__dirname + '/article.txt', 'utf8');
var myWriteShort = fs.CreateWriteStream(__dirname + '/news.txt');


myReadShort.on('data', function (chunk) {
	console.log("We get new date:/n");
	myWriteShort.write(chunk);
});//data - real action when we get date