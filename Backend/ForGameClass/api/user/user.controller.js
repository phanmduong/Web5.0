/**
 * Created by phanmduong on 15/03/2017.
 */

var User = require('./user.model');
var Game = require('../game/game.model');
module.exports = {
    create: function (req, res) {
        if (!req.body.id) res.json({status: false, message: "You need add id field"});
        if (!req.body.game) res.json({status: false, message: "You need add game field"});
        if (!req.body.username) res.json({status: false, message: "You need add username field"});
        if (!req.body.score) res.json({status: false, message: "You need add score field"});
        User.findOne({id: req.body.id})
            .then(function (user) {
                if (user) {
                    res.json({status: false, message: "Id already exists"});
                } else {
                    var newUser = new User(req.body);
                    newUser.save()
                        .then(function (user) {
                        Game.findOneAndUpdate({name: req.body.game}, {$push: {user: user._id}}, {
                            upsert: true,
                            new: true,
                            setDefaultsOnInsert: true
                        })
                            .then(function (game) {
                                res.json({status: true, message: "Create successful"});
                            }, function (err) {
                                res.json({status: false, message: err});
                            });
                    }, function (err) {
                        res.json({status: false, message: err});
                    })
                }
            })
    },

    update: function (req, res) {
        if (!req.body.id) res.json({status: false, message: "You need add id field"});
        if (!req.body.game) res.json({status: false, message: "You need add game field"});
        if (!req.body.score) res.json({status: false, message: "You need add score field"});
        User.findOneAndUpdate({id: req.body.id}, {$set: {score: req.body.score}})
            .then(function (user) {
                if (!user) res.json({status: true, message: "Id doesn't exist"});
                res.json({status: true, message: "Update successful"})
            }, function (err) {
                res.json({status: false, message: err});
            });
    },

    getUser: function (req, res) {
        User.findOne({id: req.params.username}, {_id: 0, __v: 0})
            .then(function (user) {
                if (!user) res.json({status: true, message: "Id doesn't exist"});
                res.json({status: true, user: user});
            }, function (err) {
                res.json({status: false, message: err});
            })

    }
};