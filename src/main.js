import './bundle';

import {bootstrap} from 'aurelia-bootstrapper';

bootstrap(aurelia => {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    aurelia.start().then(a => a.setRoot('src/app', document.getElementById('app')));
});
