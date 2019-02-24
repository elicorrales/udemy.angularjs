'use strict';

var mainCarService = function() {

  this.getMessage = function(car) {
    var message = 'No car selected';
    switch(car) {
      case '': message = '';break;
      case "G37": message = 'This car is a Infinity';break;
      case "Jetta": message = 'This car is a VW';break;
      default: message = 'No car found';break;
    }
    return message;
  };

  this.getMessage2 = function() {
    return 'MEssage2';
  };

};

app.service('mainCarService',mainCarService);
