/**
 * Created by phanmduong on 05/03/2017.
 */
let fs = require('fs');
let express = require('express');
let app = express();
let router = require('./router');

const port = 8080;

app.use(router);

app.listen(port, function () {
    console.log('Run server, port', port);
});