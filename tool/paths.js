var path = require('path');

var outputRoot = 'dist';
var sourceRoot = 'src';

module.exports = {
    output: outputRoot,
    source: path.join(sourceRoot, '**/*.{ts,js}'),
    entry: path.join(sourceRoot, 'main'),
    config: 'config.js',
    bundle: path.join(outputRoot, 'build.js'),
    styles: {
        main: ['styles', ['*.scss']],
        element: ['elements', ['**/*.scss']],
        app: [sourceRoot, ['**/*.scss']],
        includes: ['styles', 'bower_components']
    },
    html: {
        main: '*.html',
        app: path.join(sourceRoot, '**/*.html'),
        appOut: path.join(outputRoot, sourceRoot),
        elements: {
            main: 'elements/elements.html',
            vulcanized: 'elements/elements.vulcanized.html',
            out: path.join(outputRoot, 'elements')
        }
    },
    image: 'images/**/*',
    test: 'test/unit/**/*.js',
    e2e: 'test/e2e/**/*.js',
    testOutput: 'test/dist',
    precache: {
        glob: '{elements,styles,jspm_packages}/**/*.*',
        extra: [
            'index.html',
            'build.js',
            'config.js'
        ],
        out: path.join(outputRoot, 'precache.json')
    }
};
