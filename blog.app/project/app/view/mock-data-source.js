'use strict';

var app = require('../app');


var mockDataSource = function() {

    this.getPost = function(title,subtitle) {
        return {
            id:Math.floor(Math.random() * 100),
            title,
            subtitle,
            content:'This is a post with title ' + title + ' and subtitle ' + subtitle,
            messages: [
                {author:'Eli',message:'thanks for the post'},
                {author:'Amar',message:'thanks for the post .asdf asdflasdfsdf.asdf.asdf .'},
            ]
        };
    };
};


app.service('mockDataSource',mockDataSource);

module.exports = app;
