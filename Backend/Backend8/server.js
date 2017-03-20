/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');
var config = require('./config/index.js');
var mongoose = require('mongoose');

var app = express();
config.settingExpress(app);
var routes = require('./routes.js')(app);


mongoose.connect(config.mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connect db success');
});


app.listen(config.port, function (err) {
   console.log('app is running at port '+ config.port);
});