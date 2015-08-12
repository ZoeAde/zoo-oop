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
  if (this.status === 'open' && this.animals[animal] === -1) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimals = function(animal) {
  if (this.status === 'open') {
    this.animals.splice(animal);
  }
};


module.exports = Zoo;
