/**
 * Created by phanmduong on 21/03/2017.
 */

var Instructor = require('./instructor.model');
var Course = require('../course/course.model');

module.exports = {
    getAll: function (req, res) {
        Instructor.find().populate({path: 'courses',
            select: "-instructor"
        }).exec(function (err, instructor) {
            res.json(instructor);
        });
    },

    getInstructor: function (req, res) {
        Instructor.findOne({slug: req.params.slugName

        }).populate({path: 'courses',
            select: "-instructor"
        }).exec(function (err, data) {
            res.json(data);
        })
    },

    create: function (req, res) {
        let newInstructor = new Instructor(req.body);
        newInstructor.save()
            .then(function (doc) {
                Course.update({'_id':req.body.courses},{$push : {instructor: doc._id}}).exec((err)=>{
                    if (err) res.json({status: false, message: err});
                    res.json({status: true, message: 'Create successful'});
                });
            }, function (err) {
                res.end(err);
            });
    }

};