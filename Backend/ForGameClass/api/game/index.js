/**
 * Created by Phan M Duong on 3/31/2017.
 */
var express = require('express');

var router = express.Router();
var GameController = require('./game.controller');

router.get('/:game/all', GameController.getAll);

module.exports = router;