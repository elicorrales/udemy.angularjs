app.controller("mainController",function($scope) {

  $scope.isHidden = false;
  $scope.toggleIsHidden = function() {
    if ($scope.isHidden) {
      console.log('set to false');
      $scope.isHidden = false;
    } else {
      console.log('set to true');
      $scope.isHidden = true;
    }
  }

  $scope.ngIf = false;
  $scope.toggleNgIf = function() {
    if ($scope.ngIf) {
      console.log('set to false');
      $scope.ngIf = false;
    } else {
      console.log('set to true');
      $scope.ngIf = true;
    }
  }


});
