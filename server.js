var express = require('express');
var path = require('path');
var db = require('./server/model/db');
var bodyParser = require('body-parser');

var index = require('./server/routes/index');
var players = require('./server/routes/players');
var matches = require('./server/routes/matches');

var app = express();
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.json());

app.use('/api/player', players);
app.use('/api/match', matches);
app.use('/*', index);

var port = process.env.PORT || 8765;

app.listen(port,
  // Success
  function (port) {
    console.log('Legends of Pong app listening on port ' + port + '!');
  },
  // Error
  function (err) {
    console.error('Failed to listen on port ' + port, err);
  });

module.exports = app;
