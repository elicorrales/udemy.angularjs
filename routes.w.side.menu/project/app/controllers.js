'use strict';

var app = require('./app');

var dashboardController = function($scope,$state) {
  $scope.title = 'Dashboard';
  $scope.currentMenu = 'api';
  $scope.callHome = function() {
    console.log($state);
    $state.go('home');
  }
  $scope.changeMenu = function(menu) {
    console.log($state);
    $scope.currentMenu = menu;
  }
};

var apiController = function($scope) {
  $scope.title = 'API Content';

  $scope.myCheckBoxClick = function() { 

    console.log('myCheckBoxClick() : $scope is ' + $scope);
  }

  function myCheckBoxClickFunction() {
    console.log('myCheckBoxClikcFunction()');
  }
};

var timeController = function($scope) {
  $scope.title = 'Time Content';
};

app.controller('apiController',['$scope',apiController]);
app.controller('dashboardController',['$scope','$state',dashboardController]);
app.controller('timeController',['$scope',timeController]);




module.exports = app;
