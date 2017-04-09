/**
 * Created by phanmduong on 15/03/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var post = mongoose.Schema({
    content: String,
    created_by: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps: true });

module.exports = mongoose.model('Post', post);

