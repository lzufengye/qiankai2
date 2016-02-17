var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var request = require('superagent');
var listenOnPort = process.env.PORT || 8080;

var jsonParser = bodyParser.json();

app.get('/*', function(req, res) {
  res.sendFile(__dirname + req.path);
});

app.get('/diagnostic/status/heartbeat', function(req, res) {
  res.status(200).end();
});

http.listen(listenOnPort, function(){
  console.log('listening on *:' + listenOnPort);
});
