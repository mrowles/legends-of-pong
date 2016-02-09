var express = require('express');
var router = express.Router();
var Player = require('../model/player');

router.post('', function (req, res) {

  var player = new Player();
  player.name = req.body.name;
  player.email = req.body.email;

  player.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json({message: 'player created'});
  });

});

router.get('/all', function (req, res) {

  Player.find({}, function (err, players) {

    if (err) {
      res.send(err);
    }

    var playersList = [];

    players.forEach(function (player) {
      playersList.push(player);
    });

    res.send(playersList);
  });

});

module.exports = router;
