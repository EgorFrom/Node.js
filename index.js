var events = require('events');

//позволяет унаследовать какие-либо события для группы объектов
var util = require('util');

//создаем конструктор
var Cars = function(model) {
	this.model = model;
};

//конструктору даем обработчик событий
util.inherits(Cars, events.EventEmitter);


var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo];


cars.forEach(function(car) {
	//говорим что есть событие speed, и при его срабатывании срабатывает функция
	car.on('speed', function(text) {
		console.log(car.model + " speed is " + text);
	});
});

//иммитируем событие
bmw.emit('speed', '234');
volvo.emit('speed', '184');