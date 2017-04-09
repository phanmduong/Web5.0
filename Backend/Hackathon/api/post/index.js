/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var PostController = require('./post.controller.js');
var auth = require('../auth/auth.service.js');
router.get('/all', PostController.getAll);
router.post('/create', auth.authentication(), PostController.create);
router.get('/:postId', PostController.getPost);

module.exports = router;