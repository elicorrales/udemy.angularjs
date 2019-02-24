'use strict';

var app = angular.module('app',['ui.router']);

//$stateProvider is available because of ui.router
app.config(function($stateProvider,$urlRouterProvider){

  $stateProvider.state("main",{
    url:'/',
    templateUrl:'./app/templates/main.html'
  });
  $stateProvider.state("home",{
    url:'/home',
    templateUrl:'./app/templates/home.html'
  });
  $stateProvider.state("dashboard",{
    url:'/dashboard',
    templateUrl:'./app/templates/dashboard.html'
  });

  $urlRouterProvider.otherwise('/');
});


module.exports = app;
