//ассинхронное
// var fs = require('fs'); //file system


// var file_reader = fs.readFile('text.txt', 'utf8', function(err, data) {
//	функция сработает по окончанию
//	выводим ошибку, если она есть
//	data == file_reader
// 	console.log(data);
// });

// var message = "Привет мир!";
// fs.writeFile('outText.txt', message, function(err, data) {
//	функция сработает по окончанию
//	выводим ошибку, если она есть
//	data == message
// 	console.log(data);
// });

var fs = require('fs'); //file system

var file_reader = fs.readFileSync('text.txt', 'utf8'); //пока не прочтем, дальше не пойдем

var message = "Привет мир!\n" + file_reader;
fs.writeFileSync('outText.txt', message);//создаем/перезаписываем файл
