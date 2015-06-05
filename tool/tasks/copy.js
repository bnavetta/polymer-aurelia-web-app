var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge-stream');

gulp.task('copy', function() {
    // var app = gulp.src([
        // '*'
    // ])
    // robots.txt?

    var bower = gulp.src('bower_components/**/*').pipe(gulp.dest('dist/bower_components'));
    var jspm = gulp.src('jspm_packages/**/*').pipe(gulp.dest('dist/jspm_packages'));
    var swBootstrap = gulp.src('bower_components/platinum-sw/bootstrap/*.js')
            .pipe(gulp.dest('dist/elements/bootstrap'));
    var swToolbox = gulp.src('bower_components/sw-toolbox/*.js')
            .pipe(gulp.dest('dist/sw-toolbox'));
    var elements = gulp.src('elements/**/*.html').pipe(gulp.dest('dist/elements'));

    return merge(bower, jspm, swBootstrap, swToolbox, elements)
        .pipe($.size({title: 'Copy'}));
});
