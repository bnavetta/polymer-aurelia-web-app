'use strict';

import {Component, View} from 'angular2/angular2';

// import template from './app.html!text';

@Component({
    selector: 'app',
})
@View({
    // template: template,
    templateUrl: 'js/app/app.html',
})
export default class App {
    constructor() {
        this.name = 'World';
    }
}
