/**
 * Created by phanmduong on 05/03/2017.
 */
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let UsersController = require('../controllers/UsersController');

router.use(bodyParser.json());

router.post('/create-user',UsersController.addUser);
router.get('/user/:username',UsersController.getUser);
router.put('/user/:username/edit',UsersController.updateUser);
router.get('/all-user', UsersController.getAllUser);

module.exports = router;