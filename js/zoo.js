var Animal = require("./animal");

var Zoo = function(name, location) {
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
};

Zoo.prototype.changeLocation = function(location) {
  this.location = location;
};

Zoo.prototype.open = function() {
  this.status = 'open';
};

Zoo.prototype.close = function() {
  this.status = 'closed';
};

Zoo.prototype.isOpen = function() {
  if (this.status === 'open') {
    return 'Open!';
  }
  else {
    return 'Closed!';
  }
};

Zoo.prototype.addAnimals = function(animal) {
  //set var to instance of animal in this.animals
  var test = this.animals.indexOf(animal)
  if (this.status === 'open' && animal instanceof Animal && test) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimals = function(animal) {
  if (this.status === 'open') {
    var index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }
};


module.exports = Zoo;
