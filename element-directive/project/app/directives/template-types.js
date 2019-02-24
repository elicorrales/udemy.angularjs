'use strict';

var app = require('../app');

app.directive('templateTest',function() {
  return {
    restrict: 'EA',
    template: '<div> this message comes from Template</div'
  };
});

app.directive('templateUrlTest',function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/templates/template-url-test.html'
  };
});


module.exports = app;
