var fs = require('fs'); //file system

// fs.unlink('outText.txt', function() {
// 	//begin after delete
// });//Async

//Sync
// fs.mkdirSync('new-one');//create
// fs.mkdirSync('new-two');//create
// fs.rmdirSync('new-one');//delete

//Async create
fs.mkdir('new-one', function(){
	fs.writeFile('./new-one/some_new.txt', "Hello, world!", function(){
		console.log('All ok');
	});
});

// //Async delete
// fs.unlink('./new-one/some_new.txt', function() {
// 	fs.rmdir('new-one', function(){});
// });