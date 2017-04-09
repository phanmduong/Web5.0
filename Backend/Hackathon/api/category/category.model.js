/**
 * Created by phanmduong on 15/03/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    post: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],
    created_by: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Category', category);

