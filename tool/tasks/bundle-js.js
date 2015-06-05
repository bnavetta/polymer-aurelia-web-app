var gulp = require('gulp');
var jspm = require('jspm');
// var jspmConfig = require('jspm/lib/config');
var mkdirp = require('mkdirp');

var fs = require('fs');

gulp.task('copy-system-config', function() {
    return gulp.src('config.js').pipe(gulp.dest('dist'));
});

gulp.task('bundle-js', ['copy-system-config'], function(cb) {
    var builder = jspm.Builder();
    builder.build('src/main', null, {sourceMaps: true, minify: false})
        .then(function(bundle) {
            mkdirp.sync('dist');
            fs.writeFileSync('dist/build.js', bundle.source);
            fs.writeFileSync('dist/build.js.map', bundle.sourceMap);

            // jspmConfig.loadSync();
            // if(!jspmConfig.loader.bundles) jspmConfig.loader.bundles = {};
            // jspmConfig.loader.bundles['build.js'] = bundle.modules;
            // jspmConfig.loader.__fileName = 'dist/config.js';
            // jspmConfig.save();
            cb();
        })
        .catch(function(err) {
            console.error(err, err.stack.split('\n'));
            cb();
        });
});
