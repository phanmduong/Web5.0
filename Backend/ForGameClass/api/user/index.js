/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var UserController = require('./user.controller');

router.post('/create', UserController.create);
router.post('/update', UserController.update);
router.get('/:username', UserController.getUser);


module.exports = router;