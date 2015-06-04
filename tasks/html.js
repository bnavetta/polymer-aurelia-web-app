var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe($.replace('elements/elements.html', 'elements/elements.vulcanized.html'))
        .pipe($.minifyHtml({
            quotes: true,
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe($.size({title: 'HTML'}));
});

gulp.task('component-html', function() {
    return gulp.src('js/**/*.html')
        .pipe(gulp.dest('dist/js'))
        .pipe($.size({title: 'Component HTML'}));
});

gulp.task('vulcanize', function() {
    // return gulp.src('dist/elements/elements.vulcanized.html')
    return gulp.src('dist/elements/elements.html')
        .pipe($.vulcanize({
            dest: 'dist/elements',
            strip: true,
            inlineCss: true,
            inlineScripts: true
        }))
    // .pipe(gulp.dest('dist/elements'))
        .pipe($.rename('elements.vulcanized.html'))
        .pipe(gulp.dest('dist/elements'))
        .pipe($.size({title: 'Vulcanize'}));
});
