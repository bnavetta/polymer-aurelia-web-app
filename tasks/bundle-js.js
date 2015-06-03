var gulp = require('gulp');
var jspm = require('jspm');
var jspmConfig = require('jspm/lib/config');
var mkdirp = require('mkdirp');

var fs = require('fs');

gulp.task('bundle-js', function(cb) {
    var builder = jspm.Builder();
    builder.build('js/main', null, {sourceMaps: true, minify: true})
        .then(function(bundle) {
            mkdirp.sync('dist');
            fs.writeFileSync('dist/bundle.js', bundle.source);
            fs.writeFileSync('dist/bundle.js.map', bundle.sourceMap);

            jspmConfig.loadSync();
            if(!jspmConfig.loader.bundles) jspmConfig.loader.bundles = {};
            jspmConfig.loader.bundles['bundle'] = bundle.modules;
            jspmConfig.loader.__fileName = 'dist/config.js';
            jspmConfig.save();
        })
        .then(cb)
        .catch(console.error.bind(console));
});
