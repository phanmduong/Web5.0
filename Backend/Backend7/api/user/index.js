/**
 * Created by phanmduong on 15/03/2017.
 */
var express = require('express');

var router = express.Router();
var UserController = require('./user.controller');

router.get('/get-all', UserController.getAll);
router.post('/create', UserController.addUser);
router.get('/:username', UserController.getUser);
router.put('/:username', UserController.editUser);
router.delete('/:username', UserController.deleteUser);


router.post('/create', function (req, res) {
    res.send('user module create');
});

module.exports = router;