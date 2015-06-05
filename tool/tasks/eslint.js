var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('eslint', function() {
    return gulp.src(['app/**/*.js'])
        .pipe($.eslint())
        .pipe($.eslint.format('stylish'))
        .pipe($.eslint.failOnError());
});
