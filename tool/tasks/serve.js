var gulp = require('gulp');

var browserSync = require('../browserSync');
var paths = require('../paths');

gulp.task('serve', ['build'], function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'dist'
        },
        open: false
    });
});
