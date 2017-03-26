/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');
var controller = require('./course.controller.js');
var auth = require('../auth/auth.service.js');
var router = express.Router();

router.get('/all', auth.hasPermission('course','view'),controller.getAll);
router.post('/create',auth.hasPermission('course','create'), controller.create);
router.get('/:course', auth.hasRole('admin'),controller.getCourse);

module.exports = router;