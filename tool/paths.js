var path = require('path');

var outputRoot = 'dist';
var sourceRoot = 'src';

module.exports = {
    output: outputRoot,
    source: sourceRoot,
    styles: {
        main: ['styles', ['*.scss']],
        element: ['elements', ['**/*.scss']],
        component: [sourceRoot, ['**/*.scss']]
    },
    elements: 'elements',
    test: 'test/unit/**/*.js',
    e2e: 'test/e2e/**/*.js',
    testOutput: 'test/dist'
};
