'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('tasks');

gulp.task('build', function(cb) {
    runSequence(['css', 'images']);
});

gulp.task('default', ['build']);
