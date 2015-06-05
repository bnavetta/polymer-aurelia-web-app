import { Component, View } from 'angular2/angular2';
import { Router, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';

import routes from '../routes';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'app/app/app.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig(Array.from(routes))
class App {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}

App.parameters = [[Router]];

export default App;
