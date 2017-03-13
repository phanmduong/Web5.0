/**
 * Created by phanmduong on 05/03/2017.
 */
let mongodb = require('../mongodb');

/*
 Structure of json data user
 example:
 {
 "username": "phanmduong",
 "password": "123456",
 "className": "web5",
 "name": "Phan Minh Duong",
 "age": 20
 }
 */

let User = mongodb.model('Web5',
    {
        username: String,
        password: String,
        className: String,
        name: String,
        age: Number
    });

module.exports.addUser = function (req, res, next) {
    let newUser = new User(req.body);
    User.findOne({username: req.body.username}, {_id: 0, __v: 0})
        .then((user) => {
            if (user) {
                res.end('Username is exist');
            } else {
                newUser.save()
                    .then(function (doc) {
                        res.json(doc);
                    }, function (err) {
                        res.end(err);
                    })
            }
        }, (err) => {
            res.end(err);
        });
};

module.exports.updateUser = function (req, res, next) {
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
                }, (err) => {
                    res.end(err);
                });
        }
    });
};

module.exports.getAllUser = function (req, res, next) {
    User.find({}, {_id: 0, __v: 0})
        .then((user) => {
            res.json(user);
        }, (err) => {
            res.end(err);
        });

};

module.exports.getUser = function (req, res, next) {
    User.findOne({username: req.params.username}, {_id: 0, __v: 0})
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('Username doesn\'t exist');
            }
        }, (err) => {
            res.end(err);
        });
};
