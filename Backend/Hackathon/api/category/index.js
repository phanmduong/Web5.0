/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var CategoryController = require('./category.controller.js');
var auth = require('../auth/auth.service.js');
router.get('/all', CategoryController.getAll);
router.post('/create', auth.hasRole('admin'), CategoryController.create);
router.get('/:categoryId', CategoryController.getCategory);

module.exports = router;