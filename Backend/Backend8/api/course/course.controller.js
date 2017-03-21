/**
 * Created by phanmduong on 15/03/2017.
 */

var Course = require('./course.model.js');
var User = require('../user/user.model');
var async = require('async');
var each = require('async/each');

module.exports = {
    getAll: function (req, res) {
        var result = [];

        // Course.find().exec(function (err, courses) {
        //     async.each(courses, (course, callback) => {
        //         User.findOne({'_id': course['created_by']}).exec(function (err, user) {
        //             course.created_by = user;
        //         })
        //         callback();
        //     }, (err) => {
        //         if (err) res.end(err); else
        //             res.json(courses);
        //     });
        // });

        Course.find().populate([{path: 'created_by',
            select: 'username password -_id'
        },{path: 'instructor',
            select: '-courses'
        }]).exec(function (err, courses) {
            res.json(courses);
        });
    },

    getCourse: function (req, res) {
        Course.findOne({name: req.params.course}).populate([{path: 'created_by',
            select: 'username password -_id'
        },{path: 'instructor',
            select: '-courses'
        }]).exec(function (err, data) {
            res.json(data)
        })
    },

    create: function (req, res) {
        let newCourse = new Course(req.body);
        newCourse.save()
            .then(function (doc) {
                User.update({'_id':req.body.created_by},{$push : {created_course: doc._id}}).exec((err)=>{
                    if (err) res.json({status: false, message: err});
                    res.json({status: true, message: 'Create successful'});
                });
            }, function (err) {
                res.end(err);
            });
        // Course.create(
        //     req.body,
        //     function (err, data) {
        //         if (err) res.json({status: false, message: err});
        //             res.json({status: true, message: 'Create successful'});
        //         // console.log(JSON.stringify(data));
        //         User.update({'_id':req.body.created_by},{$push : {created_course: data._id}}).exec((err)=>{
        //             if (err) res.json({status: false, message: err});
        //             res.json({status: true, message: 'Create successful'});
        //         });
        //     }
        // )
    }

};


// populate, query
// midleware schema
// aggregate