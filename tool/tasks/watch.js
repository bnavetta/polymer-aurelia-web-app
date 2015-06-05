var gulp = require('gulp');
var path = require('path');

var browserSync = require('../browserSync');
var paths = require('../paths');

function reportChange(event) {
    console.log('File', event.path, 'was', event.type, '- running tasks...');
}

var stylePaths = [];
['main', 'element', 'app'].forEach(function(unit) {
    var config = paths.styles[unit];
    config[1].forEach(function(glob) {
        stylePaths.push(path.join(config[0], glob));
    });
});

gulp.task('watch', ['serve'], function() {
    gulp.watch([paths.source, paths.config, path.join(__dirname, '../bundle.js')], ['build-scripts', browserSync.reload]).on('change', reportChange);
    gulp.watch(stylePaths, ['build-css', browserSync.reload]).on('change', reportChange);
    gulp.watch([paths.html.main, paths.html.app], ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.images, ['build-images', browserSync.reload]).on('change', reportChange);
});
