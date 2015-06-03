'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('tasks');

gulp.task('build', function(cb) {
    runSequence(
        ['eslint', 'clean'],
        ['css', 'images', 'bundle-js'],
        ['html', 'vulcanize', 'copy', 'component-html'],
        'precache',
        cb);
});

gulp.task('default', ['build']);
