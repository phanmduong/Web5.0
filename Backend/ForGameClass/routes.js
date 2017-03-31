/**
 * Created by phanmduong on 15/03/2017.
 */

module.exports = function (app) {
    app.use('/api/user', require('./api/user'));
    app.use('/api/game', require('./api/game'));
};