/**
 * Created by phanmduong on 15/03/2017.
 */

var Category = require('./category.model.js');
var User = require('../user/user.model.js');


var jwt = require('jsonwebtoken');
var config = require('../../config')

module.exports = {
    getAll: function (req, res) {
        Category.find().select('-__v')
            .populate({
                path: 'post',
                select: '-__v'
            })
            .exec(function (err, data) {
                if (err) res.json({status: true, message: data});
                res.json({status: true, data: data});
            });
    },

    getCategory: function (req, res) {
        Category.findOne({_id: req.params.categoryId}).select('-_id -__v')
            .populate({path: 'post', select: '-__v'})
            .exec(function (err, data) {
                if (err) res.json({status: true, message: data});
                res.json({status: true, data: data});
            });
    },

    create: function (req, res) {
        var user = req.user;
        var newCategory = new Category(req.body);
        newCategory.created_by = user;
        newCategory.save()
            .then(function (category) {
                res.json({status: true, message: 'Create category successful'});
            }, function (err) {
                res.json({status: false, message: err});
            })
    }
};