/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

module.exports = {
    port: 8080,
    settingExpress : function (app) {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    },
    mongoUri : 'mongodb://localhost/web5'

};