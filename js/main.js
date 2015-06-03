'use strict';

import 'reflect-metadata';
import { bootstrap } from 'angular2/angular2';
import { bind } from 'angular2/di';
import { routerInjectables } from 'angular2/router';

import { StyleUrlResolver } from 'angular2/src/render/dom/shadow_dom/style_url_resolver';
import { ShadowDomStrategy, NativeShadowDomStrategy } from 'angular2/core';

import App from './app/app';

const hasShadowDom = document && document.body && document.body.createShadowRoot;

let shadowDomInjectables = [
    hasShadowDom ? [] : bind(ShadowDomStrategy).toFactory(
        styleUrlResolver => new NativeShadowDomStrategy(styleUrlResolver),
        [StyleUrlResolver]),
];

window.addEventListener('WebComponentsReady', () => {
    bootstrap(App, [
        routerInjectables,
        shadowDomInjectables,
    ])
        .then(app => console.log('Bootstrapped application:', app))
        .catch(err => console.error(err, err.stack));
});
