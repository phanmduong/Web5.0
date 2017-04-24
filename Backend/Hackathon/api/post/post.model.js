/**
 * Created by phanmduong on 15/03/2017.
 */
'use strict';
var mongoose = require('mongoose');

var post = mongoose.Schema({
        content: {
            type: String,
            required: true
        },
        views: Number,
        img: String,
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        title: {
            type: String,
            required: true
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        isLike: Boolean
    },
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        },
        timestamps: true
    });
post.virtual('plus').get(function () {
    return this.likes.length;
});

module.exports = mongoose.model('Post', post);

