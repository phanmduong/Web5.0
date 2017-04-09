/**
 * Created by phanmduong on 15/03/2017.
 */

var User = require('./user.model');

module.exports = {
    getAll: function (req, res) {
        User.find().select('-_id').exec(function (err, data) {
            res.json(data);
        });
    },

    addUser: function (req, res) {
        var newUser = new User(req.body);
        User.findOne({username: req.body.username}, {_id: 0, __v: 0})
            .then(function (user) {
                if (user) {
                    res.json({status: false, message: 'Username is exist'});
                } else {
                    newUser.save(function (err, user) {
                        if (err) {
                            res.json({status: false, message: err});
                        } else {
                            res.json({status: true, message: "Create successful"});
                        }
                    })
                }
            }, function (err) {
                res.json({status: false, message: err});
            });
    },

    editUser: function (req, res) {
        User.update({username: req.params.username}, req.body, function (err) {
            if (err) {
                res.json({status: false, message: err});
            } else {
                User.findOne({username: req.params.username}, {_id: 0, __v: 0})
                    .then(function (user) {
                        if (user) {
                            res.json({status: true, message: "Edit successful"});
                        } else {
                            res.json({status: false, message: 'Username doesn\'t exist'});
                        }
                    }, function (err) {
                        res.json({status: false, message: err});
                    });
            }
        })
    },

    getUser: function (req, res) {
        User.findOne({username: req.params.username}, '-_id -__v -salt -password')
            .populate({path: 'created_post', select: '-__v -created'})
            .exec(function (err, user) {
                if (err) res.json({status: false, message: err});
                if (user) {
                    res.json({status: true, data: user});
                } else {
                    res.json({status: false, message: 'Username doesn\'t exist'});
                }
            });

    },
};