/**
 * Created by phanmduong on 13/03/2017.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.end('hello');
});


app.listen(3000, function () {
    console.log('Run server, 3000');

});