var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('gen-config', function(cb) {
    // jspm.normalize('angular2').then(console.log.bind(console)).then(cb);
    // jspm.import('zone').then(console.log.bind(console)).then(cb).catch(handleError);
    jspm.configureLoader().then(function(loader) {
        // console.log(loader);
        // loader.locate('reflect-metadata').then(function(location) {
            // console.log(location);
            // console.log(loader.get('reflect-metadata'));
        // }).then(cb).catch(console.error.bind(console));
        console.log(loader.has('reflect-metadata'));
        loader.load('reflect-metadata').then(console.log.bind(console)).then(cb).catch(handleError);
    }).catch(handleError);
});

function handleError(err) {
    console.error(err, err.stack.split('\n'));
}
