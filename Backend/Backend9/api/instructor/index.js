/**
 * Created by phanmduong on 21/03/2017.
 */

var express = require('express');

var router = express.Router();
var InstructorController = require('./instructor.controller');
var auth = require('../auth/auth.service.js');

router.get('/all', auth.hasPermission('instructor', 'edit'), InstructorController.getAll);
router.post('/create', auth.hasPermission('instructor', 'create'), InstructorController.create);
router.get('/:slugName', auth.hasPermission('instructor', 'view'), InstructorController.getInstructor);

module.exports = router;