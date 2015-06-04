import { Component, View, ElementRef } from 'angular2/angular2';
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
export default class App {
    router: Router;

    constructor(router: Router, el: ElementRef, view: ViewRef) {
        this.router = router;

        console.log(this);
        console.log(el);
        console.log(view);
    }
}
