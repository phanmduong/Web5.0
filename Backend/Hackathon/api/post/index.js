/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var PostController = require('./post.controller.js');
var CommentController = require('../comment/comment.controller.js');
var auth = require('../auth/auth.service.js');
router.get('/all', auth.authentication(),PostController.getAll);
router.post('/create', auth.authentication(), PostController.create);
router.put('/like/:postId', auth.authentication(), PostController.like);
router.post('/comment/:postId', auth.authentication(), CommentController.create);
router.put('/unlike/:postId', auth.authentication(), PostController.unLike);
router.get('/:postId', auth.authentication(),PostController.getPost);


module.exports = router;