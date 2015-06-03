'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('tasks');

gulp.task('build', function(cb) {
    runSequence(
        'eslint',
        ['css', 'images'],
        cb);
});

gulp.task('default', ['build']);
