var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['build'], function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'dist'
        }
    });

    var reload = browserSync.reload;
    gulp.watch('*.html', ['html', reload]);
    gulp.watch('js/**/*.html', ['component-html', reload]);
    gulp.watch('elements/**/*.html', ['vulcanize', reload]);
    gulp.watch('{styles,elements,js}/**/*.css', ['css', reload]); // TODO: stream
    gulp.watch(['js/**/*', 'config.js'], ['bundle-js', reload]);
    gulp.watch('images/**/*', reload);
});
