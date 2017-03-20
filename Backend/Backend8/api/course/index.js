/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');
var controller = require('./course.controller.js');

var router = express.Router();

router.get('/all', controller.getAll);
router.post('/create', controller.create);
router.get('/:course', controller.getCourse);

module.exports = router;