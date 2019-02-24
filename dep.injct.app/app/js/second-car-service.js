'use strict';

var secondCarService = function() {

  this.getMessage = function(car) {
    var message = 'No car selected';
    switch(car) {
      case '': message = '';break;
      case "MDX": message = 'This car is a Acura';break;
      case "Supra": message = 'This car is Toyota';break;
      default: message = 'No car found';break;
    }
    return message;
  }
};

secondCarService.prototype.getMessage2 = function() {
  return "We Start Empty";
}
app.service('secondCarService',secondCarService);
