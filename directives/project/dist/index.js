(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = angular.module('app',[]);

module.exports = app;

},{}],2:[function(require,module,exports){
'use strict';

var app = require('../app');

var formsController = function($scope) {

  $scope.isBlurred2 = false;
  $scope.blurred2 = function() {
    $scope.isBlurred2 = true;
  }

  $scope.isBlurred = false;
  $scope.blurred = function() {
    $scope.isBlurred = true;
  }

  $scope.options3 = [
    {key:1,value:'This is Auto 1'},
    {key:2,value:'This is Auto 2'},
    {key:3,value:'This is Auto 3'},
    {key:4,value:'This is Auto 4'},
  ];

  $scope.dropdown1d = {
    default:'1'
  };

  $scope.options2 = [
    {key:1,value:'This is Auto 1'},
    {key:2,value:'This is Auto 2'},
    {key:3,value:'This is Auto 3'},
    {key:4,value:'This is Auto 4'},
  ];


  $scope.dropdown2d = {
    default: $scope.options3[3]
  }

  $scope.checkboxes = {};
  $scope.checkboxes.cb1 = 'True';
  $scope.checkboxes.cb2 = 'Yes';
  $scope.checkboxes.cb3 = 'Go';

  $scope.formSubmit = {
      name:'',
      id:'',
      error:''
  };

  $scope.validateForm = function() {
    $scope.formSubmit.error = '';
    if ($scope.formSubmit.id == '') {
      $scope.formSubmit.error += ' missing Id; ';
    }
    if ($scope.formSubmit.name == '') {
      $scope.formSubmit.error += ' missing name; ';
    }
  };

  $scope.form = {
    carType:'',
    hasTurbo:false,
    nameDisabled:false,
    hasTurboDisabled:false

  };

  $scope.formDisabled = {
    carType:'',
    hasTurbo:false,
    nameDisabled:true,
    hasTurboDisabled:true

  };

  $scope.isClass1 = true;
  $scope.isClass2 = true;
  $scope.isText = "Type Something";

  $scope.doClick1 = function() {
    $scope.isClass2 = false;
    console.log($scope.isClass1 + ' , ' + $scope.isClass2);
  }

  $scope.doClick2 = function() {
    $scope.isClass1 = false;
    console.log($scope.isClass1 + ' , ' + $scope.isClass2);
  }

  $scope.doText = function() {

    switch ($scope.isText) {
      case "1": $scope.isClass1 = true;break;
      case "2": $scope.isClass2 = true;break;
      default: $scope.isClass1 = false; $scope.isClass2 = false; break;
    }
  }
};
app.controller("formsController",formsController);

},{"../app":1}],3:[function(require,module,exports){
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

},{"../app":1}],4:[function(require,module,exports){
'use strict';

var app = require('./app');

//var controller =

require('./controllers/forms-controller');

require('./directives/document-section');

},{"./app":1,"./controllers/forms-controller":2,"./directives/document-section":3}]},{},[4]);
