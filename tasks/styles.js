'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var path = require('path');

// TODO: path config
// TODO: plumber

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
    return gulp.src(srcs.map(function(src) { return path.join(srcDir, src); }))
        .pipe($.changed(path.join('dist', srcDir), {extension: '.css'}))
        .pipe($.sourcemaps.init())
        .pipe($.cssnext({
            browsers: AUTOPREFIXER_BROWSERS,
            url: true,
            import: {
                path: [
                    path.join(__dirname, '../styles'),
                    path.join(__dirname, '../bower_components')
                ]
            },
            sourcemap: true
        }))
        .pipe($.minifyCss())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join('dist', srcDir)))
        .pipe($.size({title: 'CSS - ' + srcDir}));
}

gulp.task('styles', function() {
    return styleTask('styles', ['*.css']);
});

gulp.task('elementStyles', function() {
    return styleTask('elements', ['**/*.css']);
});

gulp.task('componentStyles', function() {
    return styleTask('app', ['**/*.css']);
});

gulp.task('css', ['styles', 'elementStyles', 'componentStyles']);
