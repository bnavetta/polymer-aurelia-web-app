var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var jspm = require('jspm');
var mkdirp = require('mkdirp');

var fs = require('fs');
var path = require('path');

var paths = require('../paths');

gulp.task('lint', function() {
    return gulp.src(paths.source)
        .pipe($.filter('**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format('stylish'))
        .pipe($.eslint.failOnError());
});

gulp.task('copy-system-config', function() {
    return gulp.src(paths.config).pipe(gulp.dest(paths.output));
});

gulp.task('build-scripts', ['lint', 'copy-system-config'], function(cb) {
    var builder = jspm.Builder();
    builder.build(paths.entry, null, {sourceMaps: true, minify: false})
        .then(function(bundle) {
            mkdirp.sync(path.dirname(paths.bundle));
            fs.writeFileSync(paths.bundle, bundle.source);
            fs.writeFileSync(paths.bundle + '.map', bundle.sourceMap);
            cb();
        })
        .catch(function(err) {
            console.error(err, err.stack.split('\n'));
            cb();
        });
});
