'use strict';

import { Component, View, ElementRef } from 'angular2/angular2';
import { Inject } from 'angular2/di';
import { ViewRef } from 'angular2/view';
import { Router, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';

import routes from '../routes';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'js/app/app.html',
    directives: [RouterOutlet, RouterLink],
    injectables: [Router, ElementRef, ViewRef]
})
@RouteConfig(Array.from(routes))
// @Inject(Router)
export default class App {
    constructor(@Inject(Router) router, @Inject(ElementRef) el, @Inject(ViewRef) view) {
    // constructor(router, el, view) {
        this.router = router;

        console.log(this);
        console.log(el);
        console.log(view);
    }
}
