'use strict';

var app = require('./app');
var request = require('request');

var userApiService = function($http) {

    this.getUser = function(name,success,error) {
        console.log('service get user ' + name);
        let user = {
            name
        };
        $http.post('/api/users/user',user).then(success,error);
        //$http.get('/api/users/user?name=Eli').then(success,error);
    };

    this.deleteUsers = function(success,error) {
        $http.delete('/api/users').then(success,error);
    };
 
    this.postUser = function(user,success,error) {
        console.log('postUser');
        $http.post('/api/users', user).then(success,error);
    };
 
    this.getUsersGood = function(success,error) {
        console.log('getUsersGood()');
        getUsers('/api/users',success,error);
    };

    this.getUsersBad = function(success,error) {
        console.log('getUsersBad()');
        getUsers('/api/bad',success,error);
    };

    this.apiBad = function(success,error) {
        console.log('apiBad()');
        getUsers('/api/asdf',success,error);
    };

    this.bad = function(success,error) {
        console.log('bad()');
        getUsers('/asdf',success,error);
    };

    let getUsers = function(url,success,error) {
        $http.get(url).then(success,error);
    };
};

app.service('userApiService',['$http',userApiService]);

module.exports = app;