import './bundle';

import {bootstrap} from 'aurelia-bootstrapper';

document.addEventListener('WebComponentsReady', () => {
    bootstrap(aurelia => {
        aurelia.use
            .standardConfiguration()
            .router()
            .developmentLogging();
        aurelia.start().then(a => a.setRoot('src/app', document.getElementById('app')));
    });
});
