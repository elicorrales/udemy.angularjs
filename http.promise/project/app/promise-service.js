'use strict';
var app = require('./app');
var promiseService = function($q) {

    this.asyncCall = function(isSuccess) {

        console.log('Inside promise-service . asyncCall()');

        var deferred = $q.defer();

        if (isSuccess || isSuccess===undefined) {

            deferred.resolve('It worked fine');
        } else {
            deferred.reject('Something Went Wrong');
        }

        return deferred.promise;
    };
};

app.service('promiseService',['$q',promiseService]);
module.exports = app;