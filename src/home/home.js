'use strict';

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'home'
})
@View({
    templateUrl: 'app/home/home.html'
})
export default class Home {
    constructor() {
        this.name = 'Ben';
    }
}
