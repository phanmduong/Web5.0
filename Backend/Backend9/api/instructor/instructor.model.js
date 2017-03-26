/**
 * Created by phanmduong on 21/03/2017.
 */
var crypto = require('crypto');
var mongoose = require('mongoose');

var instructor = mongoose.Schema({
    name: String,
    address: String,
    slug: {
        type: String,
        unique: true
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
});

module.exports = mongoose.model('Instructor', instructor);
