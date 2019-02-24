'use strict';

var app = require('./app');

var filtersController = function($scope,$filter) {
  $scope.rawName = "EliEzeR CorRaLes";
  $scope.upper   = $filter('uppercase')($scope.rawName);
  $scope.lower   = $filter('lowercase')($scope.rawName);

  $scope.amount = 1134123.2342562;

  $scope.data = [];
  $scope.data.push({id:2,name:"Eli",state:"AL"});
  $scope.data.push({id:1,name:"Eli",state:"VT"});
  $scope.data.push({id:3,name:"Elc",state:"CO"});
  $scope.data.push({id:5,name:"Ali",state:"DE"});
  $scope.data.push({id:4,name:"Bli",state:"ND"});
  $scope.data.push({id:9,name:"Cli",state:"SD"});
  $scope.data.push({id:0,name:"Dli",state:"TX"});
  $scope.data.push({id:10,name:"Elb",state:"CA"});
  $scope.data.push({id:7,name:"Ela",state:"AZ"});

};

app.controller("filtersController",['$scope','$filter',filtersController]);



module.exports = app;