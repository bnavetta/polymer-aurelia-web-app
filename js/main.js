'use strict';

import { bootstrap } from 'angular2/angular2';
// import { bind } from 'angular2/di';
import { routerInjectables } from 'angular2/router';

window.addEventListener('WebComponentsReady', function() {
    bootstrap(null, [
        routerInjectables,
    ])
        .then(app => console.log('Bootstrapped application:', app))
        .catch(console.log.bind(console));
});
