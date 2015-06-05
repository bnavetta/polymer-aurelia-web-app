var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge-stream');
var path = require('path');
var paths = require('../paths');

gulp.task('copy', function() {
    // var app = gulp.src([
        // '*'
    // ])
    // robots.txt?
    var p = function(loc) { return path.join(paths.output, loc); };

    var bower = gulp.src('bower_components/**/*').pipe(gulp.dest(p('bower_components')));
    var jspm = gulp.src('jspm_packages/**/*').pipe(gulp.dest(p('jspm_packages')));
    var swBootstrap = gulp.src('bower_components/platinum-sw/bootstrap/*.js')
            .pipe(gulp.dest(p('elements/bootstrap')));
    var swToolbox = gulp.src('bower_components/sw-toolbox/*.js')
            .pipe(gulp.dest(p('sw-toolbox')));
    var elements = gulp.src('elements/**/*.html').pipe(gulp.dest(p('elements')));

    return merge(bower, jspm, swBootstrap, swToolbox, elements)
        .pipe($.size({title: 'Copy'}));
});
