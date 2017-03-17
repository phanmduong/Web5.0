/**
 * Created by phanmduong on 15/03/2017.
 */
var mongoose = require('mongoose');

var User = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    name: String,
    className: String,
    age: Number
});

module.exports = mongoose.model('User', User);
