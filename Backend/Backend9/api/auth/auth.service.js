/**
 * Created by phanmduong on 22/03/2017.
 */
var jwt = require('jsonwebtoken');
var config = require('../../config/index');
var compose = require('composable-middleware');
module.exports = {
    authentication: function () {
        return compose()
            .use(function (req, res, next) {
                jwt.verify(req.body.token, config.secret, function (err, decoded) {
                    if (err) res.json({status: false, message: err.message}); else {
                        req.user = decoded.data;
                        next();
                    }
                });
            });
    },

    hasPermission: function (roleKey, roleValue) {
        return compose()
            .use(this.authentication())
            .use(function (req,res,next) {
               if (req.user.role == 'admin') {
                   next()
               } else{
                   var roleNum = config.rolePermission.indexOf(roleValue);
                   var roleUserNum = config.rolePermission.indexOf(req.user.permission[config.indexPermission[roleKey]][roleKey]);
                   // console.log(req.user.permission[config.indexPermission[roleKey]][roleKey]);
                   if (roleUserNum == -1) roleUserNum = 0;
                   if (roleNum > roleUserNum) {
                       res.json({status: false, message: 'Not permission'})
                   } else {
                       next();
                   }
               }
            });
    },

    hasRole: function (roleRequired) {
        if (!roleRequired) {
            throw new Error('Required needs role to sets!');
        }
        return compose()
            .use(this.authentication())
            .use(function (req, res, next) {
                var roleNum = config.roleRequest.indexOf(roleRequired);
                var roleUserNum = config.roleRequest.indexOf(req.user.role);
                if (roleUserNum == -1) roleUserNum = 0;
                if (roleNum > roleUserNum) {
                    res.json({status: false, message: 'Not role'})
                } else {
                    next();
                }
            });

    }
}