var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');

var paths = require('../paths');

gulp.task('main-html', function() {
    return gulp.src(paths.html.main)
        .pipe($.replace(paths.html.elements.main, paths.html.elements.vulcanized))
        .pipe($.minifyHtml({
            quotes: true,
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest(paths.output))
        .pipe($.size({title: 'HTML'}));
});

gulp.task('app-html', function() {
    return gulp.src(paths.html.app)
        .pipe(gulp.dest(paths.html.appOut))
        .pipe($.size({title: 'Component HTML'}));
});

gulp.task('vulcanize', ['main-html'], function() {
    return gulp.src(path.join(paths.output, paths.html.elements.main))
        .pipe($.vulcanize({
            dest: paths.html.elements.out,
            strip: true,
            inlineCss: true,
            inlineScripts: true
        }))
        .pipe($.rename(paths.html.elements.vulcanized))
        .pipe(gulp.dest(paths.output))
        .pipe($.size({title: 'Vulcanize'}));
});

gulp.task('build-html', ['main-html', 'app-html', 'vulcanize']);
