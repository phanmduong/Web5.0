/**
 * Created by phanmduong on 20/03/2017.
 */
var User = require('../user/user.model');

module.exports = {
    login: function (req, res) {
        User.findOne({username: req.body.username})
            .exec(function (err, user) {
                if (err) {
                    res.end(err);
                }
                if (!user) res.json({status: false, message: "This account is not register"});
                else {
                    if (!user.authenticate(req.body.password)) {
                        res.json({status: false, message: "Password incorrect"});
                    }
                    else {
                        res.json({status: true, message: "Login successful"});
                    }
                }

            })
    }
}