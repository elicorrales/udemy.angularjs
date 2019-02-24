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

var users = [];
users.push({"name":"Eli C","age":52});
users.push({"name":"Elia B","age":22});
users.push({"name":"Eali A","age":32});
users.push({"name":"Dee F","age":62});
users.push({"name":"Al M","age":42});

//get single user (even though it uses POST)
server.post('/api/users/user',function(request,response) {
  console.log('server - get single user by name');
  console.log(request.body); 
  var filtered = users.filter((user) => user.name===request.body.name);
  console.log(filtered); 
  var respObj = {
    "count" : filtered.length,
    "users" : filtered
  }
  response.status(200).json(respObj);
});

server.get('/api/users',function(request,response) {
  var respObj = {
    "count" : users.length,
    "users" : users
  }
  response.status(200).json(respObj);
});

server.post('/api/users/',function(request,response) {
  console.log('server add user:');
  console.log('request body:');
  console.log(request.body);
  console.log('users:');
  console.log(users); 
  var filtered = users.filter((user) => { console.log('inside users.filter():'); console.log(user); return user.name===request.body.name});
  console.log('filtered:');
  console.log(filtered); 
  if (filtered===undefined || filtered.length<1) {
    users.push(request.body);
  }
  var respObj = {
    "count" : users.length,
    "users" : users
  }
  response.status(200).json(respObj);
});

server.delete('/api/users/',function(request,response) {
  users = [];
  var respObj = {
    "count" : users.length,
    "users" : users
  }
  response.status(200).json(respObj);
});




server.get('/api/bad',function(request,response) {
  var respObj = {
    "error" : "error"
  }
  response.status(500).json(respObj);
});


server.get('/api/*',function(request,response) {
  var respObj = {
    "error" : "error"
  }
  response.status(400).json(respObj);
});



//this hits whatever is defined here, if there's a path after the base url
server.get('*',function(request,response) {
  console.log('\n\nApp got generic GET request \n\n');

  var respObj = {
    "error" : "error"
  }
  response.status(404).json(respObj);
});
