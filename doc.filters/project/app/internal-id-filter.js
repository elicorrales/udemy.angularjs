'use strict';

var app = require('./app');

app.filter('internalId', function() {

    return function(input) {

        var output = 'BGP00+' + input + (input*3/2);
        return output;
    }
});



















module.exports = app;