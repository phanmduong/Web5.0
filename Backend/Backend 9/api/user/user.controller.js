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
        let newUser = new User(req.body);
        User.findOne({username: req.body.username}, {_id: 0, __v: 0})
            .then((user) => {
                if (user) {
                    res.end('Username is exist');
                } else {
                    newUser.save(function (err, user) {
                        if (err){
                            res.json({status: false, message: err});
                        } else {
                            res.json({status: true, message: "Create successful"});
                        }
                    })
                }
            }, (err) => {
                res.end(err);
            });
    },

    editUser: function (req, res) {
        User.update({username: req.params.username}, req.body, (err) => {
            if (err) {
                res.end(err);
            } else {
                User.findOne({username: req.params.username}, {_id: 0, __v: 0})
                    .then((user) => {
                        if (user) {
                            res.json(user);
                        } else {
                            res.end('Username doesn\'t exist');
                        }
                    }, (err) => {ad
                        res.end(err);
                    });
            }
        })
    },

    getUser: function (req, res) {
        User.findOne({username: req.params.username.ah}, {_id: 0, __v: 0}).populate('created_course')
            .exec((err, user)=>{
            if (err) res.end(err);
                if (user) {
                    res.json(user);
                } else {
                    res.end('Username doesn\'t exist');
                }
            });

    },
};