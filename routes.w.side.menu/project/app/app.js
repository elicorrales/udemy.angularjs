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
    templateUrl:'./app/templates/dashboard.html',
    controller:'dashboardController'
  });

  $stateProvider.state("dashboard.api",{
    views: {
      'content': {
        url:'/api',
        templateUrl: './app/templates/dashboard-api.html',
        controller:'apiController'
      }
    }
  });

  $stateProvider.state("dashboard.time",{
    views: {
      'content': {
        url:'/time',
        templateUrl: './app/templates/dashboard-time.html',
        controller:'timeController'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
});


module.exports = app;
