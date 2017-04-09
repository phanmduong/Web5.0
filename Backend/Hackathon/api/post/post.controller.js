/**
 * Created by phanmduong on 15/03/2017.
 */

var Post = require('./post.model.js');
var User = require('../user/user.model.js');


var jwt = require('jsonwebtoken');
var config = require('../../config')

module.exports = {
    getAll: function (req, res) {
        Post.find().select('-updatedAt -__v')
            .sort('-createdAt')
            .skip(config.limitPost*req.query.page)
            .limit(config.limitPost)
            .populate({
                path: 'created_by',
                select: '-_id -password -salt -created_post -__v'
            })
            .exec(function (err, data) {
                res.json({status: true, data: data});
            });
    },

    getPost: function (req, res) {
        Post.findOne({_id: req.params.postId}).select('-_id -updatedAt -createdAt -__v')
            .populate({path: 'created_by', select: '-_id -password -salt -created_post -__v'})
            .exec(function (err, data) {
                res.json({status: true, data: data});
            });
    },

    create: function (req, res) {
        var user = req.user;
        var newPost = new Post(req.body);
        newPost.created_by = user;
        newPost.save()
            .then(function (post) {
                User.update({_id: newPost.created_by}, {$addToSet: {created_post: post}})
                    .then(function (user) {
                        res.json({status: true, message: 'Create post successful'});
                    }, function (err) {
                        res.json({status: false, message: err});
                    })
            }, function (err) {
                res.json({status: false, message: err});
            })
    }
};