app.controller("mainController",function($scope) {

  $scope.focusObj = {
    dropdown : "",
    input : ""
  }

  $scope.showAlert = function(origin) {
    alert("this alert was triggered by '" + origin + "'");
  }

  $scope.markFocused = function(obj) {
    $scope.focusObj.dropdown = "";
    $scope.focusObj.input = "";
    $scope.focusObj[obj] = obj + ' has focus';
  }

  $scope.markBlurred = function(obj) {
    $scope.focusObj.dropdown = "";
    $scope.focusObj.input = "";
    $scope.focusObj[obj] = obj + ' now blurred';
  }

});
