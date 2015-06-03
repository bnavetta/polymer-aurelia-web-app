var gulp = require('gulp');
var glob = require('glob');

var fs = require('fs');
var path = require('path');

gulp.task('precache', function(cb) {
    var dir = 'dist';

    glob('{elements,styles,jspm_packages}/**/*.*', {cwd: dir}, function(error, files) {
        if (error)
        {
            cb(error);
        }
        else
        {
            files.push('index.html',
                       'bundle.js',
                       'config.js',
                       'bower_components/webcomponentsjs/webcomponents.min.js');
            var filePath = path.join(dir, 'precache.json');
            fs.writeFile(filePath, JSON.stringify(files), cb);
        }
    });
});
