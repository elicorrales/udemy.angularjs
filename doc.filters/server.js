var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 8080;

//this will hit index.html directly if url is http://localhost:8080 and nothing in URI (no path)
server.use(express.static(__dirname + '/project'));

server.use(bodyParser.json());
server.use(bodyParser.json({type:'application/vdn.api+json'}));

server.listen(port);
console.log('App Listening On Port' + port);

server.get('/favicon.ico', (req,res) => res.status(204));

//this hits whatever is defined here, if there's a path after the base url
server.get('*',function(req,res) {
  console.log('\n\nApp got generic GET request \n\n');

  res.sendFile(__dirname + '/project/index.html');
});
