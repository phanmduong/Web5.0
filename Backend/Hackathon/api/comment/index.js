/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var CommentController = require('./comment.controller.js');
var auth = require('../auth/auth.service.js');
router.get('/:commentId', auth.authentication(),CommentController.getComment);


module.exports = router;