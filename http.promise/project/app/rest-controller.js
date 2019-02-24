'use strict';

var app = require('./app');
var restController = function($scope,$http,$timeout,userApiService,promiseService) {

    $scope.error = false;
    $scope.errMsg = '';
    $scope.data;

    $scope.asyncCallExecutedSuccess = false;
    promiseService.asyncCall(true).then((response) =>{
        $scope.asyncCallExecutedSuccess = response;
    },(error) => {
        $scope.asyncCallExecutedSuccess = error;
    });

    $scope.asyncCallExecutedError = false;
    promiseService.asyncCall(false).then((response) =>{
        $scope.asyncCallExecutedError = response;
    },(error) => {
        $scope.asyncCallExecutedError = error;
    });

    var onSuccessFunc  = function(response) {
        $scope.process = 'Process Success.';
        $scope.data = response.data;
        $scope.error = false;
        $scope.errMsg = '';
        $scope.error = false;
    };
    var onErrorFunc = function(response) {
        $scope.process = 'Process Error.';
        $scope.data = [];
        $scope.errMsg = 'error:';
        $scope.error = true;
        if (response.status) { $scope.errMsg += ' status:' + response.status; }
        if (response.statusText) { $scope.errMsg += ' : ' + response.statusText; }
    };

    $scope.getUser = function(name) {
        $scope.process = 'processing get user....' + name;
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.getUser(name,onSuccessFunc,onErrorFunc);

    }
    $scope.deleteUsers = function() { 
        $scope.process = 'processing delete....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.deleteUsers(onSuccessFunc,onErrorFunc);
    };
    $scope.postUser = function(name,age) { 
        console.log('Add New User');
        if (name===undefined || name == '') {
            $scope.error = true;
            $scope.errMsg = 'Need User Name';
            return;
        }
        if (age===undefined || age == '') {
            $scope.error = true;
            $scope.errMsg = 'Need User Age';
            return;
        }
        $scope.process = 'processing post....';
        $scope.errMsg = '';
        $scope.error = false;
        var user = {
            name,
            age
        }
        userApiService.postUser(user,onSuccessFunc,onErrorFunc);
    };
    $scope.getGood = function() { 
        $scope.process = 'processing get Good....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.getUsersGood(onSuccessFunc,onErrorFunc);
    };
    $scope.getBad = function() {
        $scope.process = 'processing get Bad....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.getUsersBad(onSuccessFunc,onErrorFunc);
    };

    $scope.apiBad = function() {
        $scope.process = 'processing Api Bad....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.apiBad(onSuccessFunc,onErrorFunc);
    };

    $scope.bad = function() {
        $scope.process = 'processing Bad....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.bad(onSuccessFunc,onErrorFunc);
    };


    //same as above but with timeout to simulate network or data issues
    var onSuccessFunc2  = function(response) {
        $timeout(function() {
            $scope.process = 'processed.';
            $scope.data = response.data;
            $scope.errMsg = '';
            $scope.error = false;
        },2000);
    };
    var onErrorFunc2 = function(response) {
        $timeout(function() {
            $scope.process = 'processed.';
            $scope.data = [];
            $scope.errMsg = 'error:';
            $scope.error = true;
            if (response.status) { $scope.errMsg += ' status:' + response.status; }
            if (response.statusText) { $scope.errMsg += ' : ' + response.statusText; }
        },2000);
    };


    $scope.getGood2 = function() {
        $scope.process = 'processing....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.getUsersGood(onSuccessFunc2,onErrorFunc2);
    };
    $scope.getBad2 = function() {
        $scope.process = 'processing....';
        $scope.errMsg = '';
        $scope.error = false;
        userApiService.getUsersBad(onSuccessFunc2,onErrorFunc2);
    };


};



app.controller('restController',['$scope','$http','$timeout','userApiService','promiseService',restController]);
module.exports  = app;
