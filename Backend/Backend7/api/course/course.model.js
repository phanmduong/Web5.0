/**
 * Created by phanmduong on 15/03/2017.
 */
var mongoose = require('mongoose');

var Course = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    title: String,
    img: String,
    description: String
});

module.exports = mongoose.model('Course', Course);
