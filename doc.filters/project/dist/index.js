(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = angular.module('app',[]);

module.exports = app;

},{}],2:[function(require,module,exports){
'use strict';

var app = require('./app');

app.directive('documentSection',function() {

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title:'@'
    },
    templateUrl:'./app/templates/document-section.html'
  }
});


module.exports = app;

},{"./app":1}],3:[function(require,module,exports){
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
},{"./app":1}],4:[function(require,module,exports){
'use strict';

require('./app');

require('./document-section');

require('./filters-controller');

require('./internal-id-filter');
},{"./app":1,"./document-section":2,"./filters-controller":3,"./internal-id-filter":5}],5:[function(require,module,exports){
'use strict';

var app = require('./app');

app.filter('internalId', function() {

    return function(input) {

        var output = 'BGP00+' + input + (input*3/2);
        return output;
    }
});



















module.exports = app;
},{"./app":1}]},{},[4]);
