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
