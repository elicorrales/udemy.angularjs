'use strict';


var app = require('../app');


app.directive('controllerScope',function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/templates/scope-test.html'
  }
});

app.directive('isolatedScope',function() {
  return {
    restrict: 'EA',

    scope: { // just having this, in this way, makes scope isolated, and loses the parent (controller's scope)

    },

    templateUrl: './app/directives/templates/scope-test.html'
  }
});


app.directive('attributeScope',function() {
  return {
    restrict: 'EA',

    scope: { // just having this, in this way, makes scope isolated, and loses the parent (controller's scope)
      form: '=',
      myownvar: '=',
      yomama: '='
    },

    templateUrl: './app/directives/templates/scope-test.html'
  }
});



module.exports = app;
