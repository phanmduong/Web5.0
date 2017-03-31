/**
 * Created by Phan M Duong on 3/31/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var game = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    user:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('Game', game);