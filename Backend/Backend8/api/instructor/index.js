/**
 * Created by phanmduong on 21/03/2017.
 */

var express = require('express');

var router = express.Router();
var InstructorController = require('./instructor.controller');

router.get('/all', InstructorController.getAll);
router.post('/create', InstructorController.create);
router.get('/:slugName', InstructorController.getInstructor);

module.exports = router;