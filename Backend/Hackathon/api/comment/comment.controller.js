/**
 * Created by phanmduong on 15/03/2017.
 */

var Comment = require('./comment.model.js');
var Post = require('../post/post.model');
var config = require('../../config')

module.exports = {
    getComment: function (req, res) {
        Comment.findById(req.params.commentId).select('-_id -updatedAt -createdAt -__v')
            .populate([{
                path: 'post',
                select: '-_id -comments -__v'
            }, {
                path: 'created_by',
                select: '-_id -password -salt -created_post -__v'
            }])
            .exec(function (err, data) {
                res.json({status: true, data: data});
            });
    },

    create: function (req, res) {
        var user = req.user;
        var newComment = new Comment(req.body);
        newComment.created_by = user;
        newComment.post = req.params.postId;
        newComment.save()
            .then(function (comment) {
                Post.findByIdAndUpdate(newComment.post, {$addToSet: {comments: comment}})
                    .then(function (user) {
                        res.json({status: true, message: 'Create comment successful'});
                    }, function (err) {
                        res.json({status: false, message: err})
                    })
            }, function (err) {
                res.json({status: true, message: err});
            });
    }
};