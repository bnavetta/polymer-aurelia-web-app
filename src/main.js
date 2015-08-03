import './bundle';

import {bootstrap} from 'aurelia-bootstrapper';

// document.addEventListener('WebComponentsReady', () => {
    console.log("Initializing!");
    bootstrap(aurelia => {
        aurelia.use
            .standardConfiguration()
            .router()
            .developmentLogging();
        aurelia.start().then(a => a.setRoot('src/app', document.getElementById('app')));
    });
// });
