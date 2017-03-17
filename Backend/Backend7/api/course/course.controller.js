/**
 * Created by phanmduong on 15/03/2017.
 */

var Course = require('./course.model.js');

module.exports = {
  getAll : function (req, res) {
      var result = [];
      Course.find().sort('name').select('-_id').exec(function (err, data) {
          res.json(data);
      });
  },

  create: function (req, res) {
      Course.create(
          req.body,
          function (err, data) {
              if (err) res.json({status: false, message: err});
              res.json({status: true, message:'Create successful'});
          }
      )
  }

};


// populate, query
// midleware schema
// aggregate