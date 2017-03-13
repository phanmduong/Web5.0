var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var csslint = require('gulp-csslint');

gulp.task('default', ['run', 'watch'], function () {
});

gulp.task('run', function () {
    checkError();
});

gulp.task('watch', function () {
    gulp.watch(['testFolder/**/*.*', './*.*'], function () {
        checkError();
        console.log('===========================');
    });
});

var checkError = function () {
    gulp.src(['testFolder/**/*.js', './*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
    gulp.src(['testFolder/**/*.css', './*.css'])
        .pipe(csslint())
        .pipe(csslint.formatter());
};



// var exitOnJshintError = map(function (file, cb) {
//     if (!file.jshint.success) {
//         isError = false;
//     }
// });
//
// var isError = true;
//
//
// var runServer = function () {
//     nodemon({
//         script: 'app.js'
//     });
// };