import { LogManager } from 'aurelia-framework';

const logger = LogManager.getLogger('app');

export class App {
    configureRouter(config, router) {
        logger.info('Configuring router...');

        config.title = 'Web App';
        config.map([
            {route: ['', 'home'], moduleId: './home', nav: true, title: 'Home'}
        ]);

        this.router = router;

        // this.drawerPanel.forceNarrow = true;
    }
}
