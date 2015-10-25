import { bootstrap, provide } from 'angular2/angular2';
import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
import { Dashboard } from './components/dashboard/dashboard';

bootstrap(Dashboard, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/'})]);