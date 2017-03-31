/**
 * Created by phanmduong on 15/03/2017.
 */
var mongoose = require('mongoose');

var user = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    score:  {
        type: Number,
        required: true
    },
    game: String,
});

module.exports = mongoose.model('User', user);

