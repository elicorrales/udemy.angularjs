var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 8080;

server.use(express.static(__dirname + '/project'));
server.use(bodyParser.json());
server.use(bodyParser.json({type:'application/vdn.api+json'}));

server.listen(port);
console.log('App Listening On Port' + port);

server.get('/favicon.ico', (req,res) => res.status(204));

server.get('*',function(req,res) {
  res.sendFile('./project/index.html');
});
