/**
 * Created by phanmduong on 05/03/2017.
 */
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

module.exports = mongoose;