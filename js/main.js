'use strict';

import 'reflect-metadata';
import { bootstrap } from 'angular2/angular2';
// import { bind } from 'angular2/di';
import { routerInjectables } from 'angular2/router';

import App from './app/app';


window.addEventListener('WebComponentsReady', () => {
    bootstrap(App, [
        routerInjectables,
    ])
        .then(app => console.log('Bootstrapped application:', app))
        .catch(err => console.error(err, err.stack));
});
