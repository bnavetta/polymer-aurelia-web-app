'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer-core');
var path = require('path');

var paths = require('../paths');

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

function styleTask(srcDir, srcs) {
    var outputDir = path.join(paths.output, srcDir);

    return gulp.src(srcs.map(function(src) { return path.join(srcDir, src); }))
        .pipe($.changed(outputDir, {extension: '.css'}))
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            includePaths: paths.styles.includes
        }))
        .pipe($.postcss([
            autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })
        ]))
        .pipe($.minifyCss())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(outputDir))
        .pipe($.size({title: 'CSS - ' + srcDir}));
}

gulp.task('main-styles', function() {
    var config = paths.styles.main;
    return styleTask(config[0], config[1]);
});

gulp.task('element-styles', function() {
    var config = paths.styles.element;
    return styleTask(config[0], config[1]);
});

gulp.task('app-styles', function() {
    var config = paths.styles.app;
    return styleTask(config[0], config[1]);
});

gulp.task('build-styles', ['main-styles', 'element-styles', 'app-styles']);
