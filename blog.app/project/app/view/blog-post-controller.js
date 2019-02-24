'use strict';
var app = require('../app');
var blogPostController = function($scope,dataService) {
    $scope.posts = dataService.getPostData();
    $scope.basicInfo = dataService.getBasicInfoData();
    $scope.social = dataService.getSocialData();
};
app.controller('blogPostController',['$scope','dataService',blogPostController]);
module.exports =  app;