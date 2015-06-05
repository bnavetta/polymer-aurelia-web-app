var gulp = require('gulp');
var glob = require('glob');

var fs = require('fs');
var path = require('path');

var paths = require('../paths');

gulp.task('build-precache', function(cb) {
    glob(paths.precache.glob, {cwd: paths.output}, function(error, files) {
        if (error)
        {
            cb(error);
        }
        else
        {
            files.push(paths.precache.extra);
            fs.writeFile(paths.precache.out, JSON.stringify(files), cb);
        }
    });
});
