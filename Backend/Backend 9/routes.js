/**
 * Created by phanmduong on 15/03/2017.
 */

module.exports = function (app) {
    app.use('/api/user', require('./api/user/index.js'));
    app.use('/api/course', require('./api/course/index.js'));
    app.use('/api/instructor', require('./api/instructor/index.js'));
    app.post('/login', require('./api/auth/auth.controller').login);
    app.post('/cf', require('./api/auth/auth.controller').confirm);
};