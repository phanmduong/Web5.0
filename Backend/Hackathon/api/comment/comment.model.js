/**
 * Created by phanmduong on 15/03/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comment = mongoose.Schema({
    content: String,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});


module.exports = mongoose.model('Comment', comment);

