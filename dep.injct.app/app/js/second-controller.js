'use strict';

//another variation - see main-controller.js
app.controller('secondController',['$scope','secondCarService',function($scope,secondCarService) {
  $scope.controllerName = 'Second Controller Test';

  $scope.car;
  $scope.message = secondCarService.getMessage2();

  $scope.selectCar = function() {
    if ($scope.car !== undefined) {
      $scope.message = secondCarService.getMessage($scope.car);
    }
  }
}]); //<---- notice having to keep track of all these braces, brackets, etc.
