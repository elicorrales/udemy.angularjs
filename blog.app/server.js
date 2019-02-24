'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var server = express();
var port = 8080;
server.use(express.static(__dirname + '/project'));
server.use(bodyParser.json());
server.use(bodyParser.json({type:'application/vdn.api+json'}));

server.listen(port);

console.log('Blog Server Is Up On Port ' + port);

server.get('/favicon.ico', (req,res) => res.status(204));

server.get('*',function(request,response){
    console.log('You requested ' + request.path);
    response.status(404);
    response.send(request.path + ' not found');
})
