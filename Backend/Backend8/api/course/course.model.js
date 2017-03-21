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
    description: String,
    created_by: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    instructor: [{type:mongoose.Schema.Types.ObjectId, ref:'Instructor'}]
});

module.exports = mongoose.model('Course', Course);
