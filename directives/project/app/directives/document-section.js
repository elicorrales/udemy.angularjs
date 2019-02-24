'use strict';

var app = require('../app');

app.directive('documentSection',function() {

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title:'@'
    },
    templateUrl:'./app/directives/document-section.html'
  }
});


module.exports = app;
