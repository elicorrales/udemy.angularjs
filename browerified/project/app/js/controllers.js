'use strict';


var app = require('./app');

var mainController = function($scope) {
  $scope.controllerName = 'Main Controller Test';
};
app.controller('mainController',['$scope',mainController]);
