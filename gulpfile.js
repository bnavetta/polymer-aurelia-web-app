'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('tool/tasks');

gulp.task('build', function(cb) {
    runSequence(
        'clean',
        ['build-styles', 'build-images', 'build-scripts'],
        'copy',
        'build-html',
        'build-precache',
        cb);
});

gulp.task('default', ['build']);
