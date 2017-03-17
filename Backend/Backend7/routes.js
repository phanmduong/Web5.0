/**
 * Created by phanmduong on 15/03/2017.
 */

module.exports = function (app) {
    app.use('/api/user', require('./api/user/index.js'));
    app.use('/api/course', require('./api/course/index.js'));
};