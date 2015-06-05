var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');

var paths = require('../paths');

gulp.task('build-images', function() {
    return gulp.src(paths.image)
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(path.join(paths.output, 'images')))
        .pipe($.size({title: 'Images'}));
});
