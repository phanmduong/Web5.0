/**
 * Created by phanmduong on 15/03/2017.
 */

module.exports = function (app) {
    app.use('/api/user', require('./api/user/index.js'));
    app.use('/api/post', require('./api/post/index.js'));
    app.use('/api/category', require('./api/category/index.js'));
    app.use('/api/comment', require('./api/comment/index.js'));
    app.post('/login', require('./api/auth/auth.controller').login);
};