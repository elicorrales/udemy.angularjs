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

//<element-test></element-test>
app.directive('elementTest',function() {

  return {
    restrict: 'E',//E=element,A=attribute,C=class,M=comment
    template: '<div>This message came from the <strong>Element Directive</strong></div>'
  };
});

//<attribute-test></attribute-test>
app.directive('attributeTest',function() {

  return {
    restrict: 'A',//E=element,A=attribute,C=class,M=comment
    template: '<div>This message came from the <strong>Attribute Directive</strong></div>'
  };
});


//<class-test></class-test>
app.directive('classTest',function() {

  return {
    restrict: 'C',//E=element,A=attribute,C=class,M=comment
    template: '<div>This message came from the <strong>Class Directive</strong></div>'
  };
});


//<!-- comment-test -->
app.directive('commentTest',function() {

  return {
    restrict: 'M',//E=element,A=attribute,C=class,M=comment
    replace: true,
    template: '<div>This message came from the <strong>Comment Directive</strong></div>'
  };
});



module.exports = app;

},{"../app":1}],4:[function(require,module,exports){
'use strict';

var app = require('../app');

app.directive('documentSection',function() {

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title:'@'
    },
    templateUrl:'./app/directives/templates/document-section.html'
  }
});


module.exports = app;

},{"../app":1}],5:[function(require,module,exports){
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

},{"../app":1}],6:[function(require,module,exports){
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

},{"../app":1}],7:[function(require,module,exports){
'use strict';

var app = require('./app');

//var controller =


require('./directives/document-section');
require('./directives/directive-types')
require('./directives/template-types');
require('./directives/scope-test');

require('./controllers/forms-controller');

},{"./app":1,"./controllers/forms-controller":2,"./directives/directive-types":3,"./directives/document-section":4,"./directives/scope-test":5,"./directives/template-types":6}]},{},[7]);
