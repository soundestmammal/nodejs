//Create Constructor Object
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function () {
    return 'vroom';
}

const car = new Car({title: 'Waymo'});

console.log(car);
