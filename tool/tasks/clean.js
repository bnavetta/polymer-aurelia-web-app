var gulp = require('gulp');
var del = require('del');

var paths = require('../paths');

gulp.task('clean', del.bind(null, paths.output));
