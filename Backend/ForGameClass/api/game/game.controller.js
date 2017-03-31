/**
 * Created by Phan M Duong on 3/31/2017.
 */
var Game = require('./game.model');

module.exports = {
    getAll: function (req, res) {
        Game.find({name: req.params.game}, {_id: 0, __v: 0})
            .populate({path: 'user', select: 'id username score -_id', options: { sort: { 'score': -1 }, limit: 50 }})
            .then(function (games) {
                res.json({status: true, games: games})
            }, function (err) {
                res.json({status: false, message: err})
            });
    }
};