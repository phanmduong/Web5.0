/**
 * Created by phanmduong on 20/03/2017.
 */
var User = require('../user/user.model');
var jwt = require('jsonwebtoken');
var config = require('../../config')
module.exports = {
    login: function (req, res) {
        User.findOne({username: req.body.username})
            .exec(function (err, user) {
                if (err) {
                    res.json({status: false, message: user});
                }
                if (!user) res.json({status: false, message: "This account is not register"});
                else {
                    if (!user.authenticate(req.body.password)) {
                        res.json({status: false, message: "Password incorrect"});
                    }
                    else {
                        var token = jwt.sign({
                            data: user
                        }, config.secret, { expiresIn: '60m' });
                        res.json({status: true, message: "Login successful", token: token});
                    }
                }

            })
    }
}