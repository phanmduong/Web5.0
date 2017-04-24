/**
 * Created by phanmduong on 15/03/2017.
 */

var Post = require('./post.model.js');
var User = require('../user/user.model.js');
var Category = require('../category/category.model');
var async = require('async');

var jwt = require('jsonwebtoken');
var config = require('../../config')

module.exports = {

    all: function (req, res) {
        Post.find().exec(function (err, data) {
            if (err) res.json({status: false, message: err});
            res.json({status: true, data: data[0]});
        });
    },

    getAll: function (req, res) {
        var user = req.user;
        Post.find().select('-updatedAt -__v')
            .sort('-createdAt')
            .skip(config.limitPost * req.query.page)
            .limit(config.limitPost)
            .populate([{
                path: 'author',
                select: '-_id -password -salt -created_post -__v'
            }, {
                path: 'category',
                select: '-post -__v'
            }, {
                path: 'likes',
                select: '-_id -password -salt -created_post -__v'
            }, {
                path: 'comments',
                select: '-__v'
            }
            ])
            .exec(function (err, data) {
                if (err) res.json({status: false, message: err});
                // data.forEach(function (post) {
                //     console.log(post);
                //     post.isLike = false;
                //     post.likes.forEach(function (userIdLiked) {
                //         if (userIdLiked === user._id){
                //             data.isLike = true;
                //         }
                //     });
                // })
                res.json({status: true, data: data});
            });
    },

    getPost: function (req, res) {
        var user = req.user;
        Post.findByIdAndUpdate(req.params.postId, {$inc: {views: 1}}).select('-_id -updatedAt -createdAt -__v')
            .populate([{
                path: 'author',
                select: '-id -_id -password -salt -created_post -__v'
            }, {
                path: 'category',
                select: '-post -__v'
            }, {
                path: 'likes',
                select: '-_id -password -salt -created_post -__v'
            }, {
                path: 'comments',
                select: '-__v -post'
            }, {
                path: 'comments.created_by',
                select: '-_id -password -salt -created_post -__v'
            }
            ])
            .exec(function (err, data) {
                if (err) res.json({status: true, message: data});
                data.isLike = false;
                data.likes.forEach(function (userIdLiked) {
                    if (userIdLiked === user._id){
                        data.isLike = true;
                    }
                });
                res.json({status: true, data: data});
            });
    },

    create: function (req, res) {
        var user = req.user;
        var newPost = new Post(req.body);
        newPost.author = user;
        newPost.save()
            .then(function (post) {
                async.parallel({
                        one: function (callback) {
                            User.findByIdAndUpdate(newPost.author, {$addToSet: {created_post: post}})
                                .then(function (user) {
                                    callback(null, 1)
                                }, function (err) {
                                    callback(err, 1);
                                })
                        },
                        two: function (callback) {
                            Category.findByIdAndUpdate(newPost.category, {$addToSet: {post: post}})
                                .then(function (category) {
                                    callback(null, 2)
                                }, function (err) {
                                    callback(err, 2);
                                })
                        },
                    }, function (err, result) {
                        if (err) {
                            res.json({status: false, message: err})
                        }
                        res.json({status: true, message: 'Create post successful'});
                    }
                )
            }, function (err) {
                res.json({status: true, message: err});
            });
    },
    like: function (req, res) {
        var user = req.user;
        Post.findByIdAndUpdate(req.params.postId, {$addToSet: {likes: user}})
            .then(function (post) {
                res.json({status: true, message: 'Like successful'});
            }, function (err) {
                res.json({status: false, message: err});
            });
    },
    unLike: function (req, res) {
        var user = req.user;
        Post.findByIdAndUpdate(req.params.postId, {$pop: {likes: user}})
            .then(function (post) {
                res.json({status: true, message: 'Unlike successful'});
            }, function (err) {
                res.json({status: false, message: err});
            });
    }
};